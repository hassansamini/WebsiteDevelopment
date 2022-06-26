<script>
const container=document.querySelector('.container'),
	  form=container.querySelector('.form'),
	  submitInput=form[0].querySelector('input[type="submit');
	   function getDataForm(e)
	   {
	   	var formData=new FormData(form[0]);
	   	alert(formData.get('fname'))

	   }

document.addEventListener('DOMContentLoaded')
</script>
