const form = document.forms.buy_form;

form.addEventListener("submit", event => {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Заказ успешно совершен',
		showConfirmButton: false,
		timer: 1500
	})
  	event.preventDefault();
  	new FormData(form);
});

form.addEventListener("formdata", event => {
	let customer_email = event.formData.get("customer_email");
	let customer_address = event.formData.get("customer_address");
	let customer_phone = event.formData.get("customer_phone");
	console.log("Почта: " + customer_email);
	console.log("Адрес: " + customer_address);
	console.log("Телефон: " + customer_phone);
});

