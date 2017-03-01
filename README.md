# Promised AngularJS wrapper for SweetAlert

AngularJS wrapper for [SweetAlert](http://tristanedwards.me/sweetalert) built with Promises. Sweet Alert is a beautiful replacement for Javascript's "Alert".

## Dependencies
- required:  
	[AngularJS](https://github.com/angular/angular)  
	[sweetalert2](https://github.com/limonte/sweetalert2)

## Install
1. download the files
	1. Bower
		1. `bower install angular-sweetalert-as-promised`
2. include the files in your app
	1. `Alert.min.js`
	2. `sweet-alert.js` OR `sweet-alert.min.js`
	3. `sweet-alert.css`
3. include the module in angular (i.e. in `app.js`) - `jutaz.ngSweetAlertAsPromised`

## Examples

### Simple

```js
SweetAlert.success({
	message: "Here's a message"
}).then(function () {
	// User closed alert
});

```

### With cancel

```js
SweetAlert.warning({
	message: "Are you sure?",
	text: "Your will not be able to recover this imaginary file!",
	showCancelButton: true,
	confirmButtonColor: "#DD6B55",
	confirmButtonText: "Yes, delete it!"
}).then(function () {
	// User accepted
}, function () {
	// User declined
});
```


## Documentation

- [https://limonte.github.io/sweetalert2/](https://limonte.github.io/sweetalert2/)
