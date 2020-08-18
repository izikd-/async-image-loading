(function (window) {

	let loaded = 0;
	let failed = 0;

	let _init = ({imgClass = 'img'}) => {
		const images = document.getElementsByClassName(imgClass);
		const promises = [...images]?.map(image => {
			const src = image.getAttribute('data-src');
			return new Promise((resolve, reject) => {
				image.onload = function () {
					resolve(image);
				};
				image.onerror = image.onabort = function () {
					reject(src);
				};
				image.src = src;
			}).then(() => {
				loaded++;
			}, () => {
				failed++;
			}).catch(err => {
				console.error(err);
			});
		});

		Promise.all(promises).then(() => {
			console.log(`${loaded} / ${images.length} has been loaded successfully!`);
		}).catch(err => {
			console.error(err);
		});
	};




	window.AsyncImageProgress = {
		init: _init,
		get loaded() { return loaded },
		get failed() { return failed },
	}

})(window);
