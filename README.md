# Async Image Loading



### Installation

Install the dependencies and devDependencies.

```sh
$ cd async-image-loading
$ npm install
$ npm run build
```


### Configuration


| Arguments | value | description
| ------ | ------ | ------ |
| imgClass | string | select all images with this specific class (Default: 'img')

### Function & Variables


| Arguments | type | description
| ------ | ------ | ------ |
| init | function | initialize the script
| loaded | getter | get the number of successfully loaded images
| failed | getter | get the number of failed images

### Example

Basic usage:
```
<script>
	// Init
	AsyncImageProgress.init({});
</script>
```

with custom class:
```
<script>
    AsyncImageProgress.init({
		imgClass: 'custom-class'
	});
</script>
```

Full HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Example</title>
</head>
<body>
<img class="img" src="https://place-hold.it/300" alt="" data-src="https://place-hold.it/500">
<img class="img" src="https://place-hold.it/300" alt="" data-src="https://place-hold.it/500">
<img class="img" src="https://place-hold.it/300" alt="" data-src="https://place-hold.it/500">
<img class="img" src="https://placsad.it/300" alt="" data-src="https://plasdfold.it/500"> <!-- Bad request -->
<img class="img" src="https://place-hold.it/300" alt="" data-src="https://place-hold.it/500">

<script src="app.js"></script>
<script>
	// Init
	AsyncImageProgress.init({
		imgClass: 'custom-class'
	});

	// How many images have been loaded after 4 seconds
	setTimeout(function (){
		console.log(AsyncImageProgress.loaded);
	}, 4000);
</script>
</body>
</html>
```
