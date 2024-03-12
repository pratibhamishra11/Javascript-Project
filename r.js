// script.js 

function solve() { 
	let password = 
		document.getElementById('password').value; 
	let branch = document.getElementById('branch').value;
	let mail = 
		document.getElementById('email').value; 
	let flag = 1; 
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

	if (!emailRegex.test(mail)) { 
		flag = 0; 
		pass.innerText = 
			'Please enter a valid email address.'; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 

	let passwordRegex = 
		/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/; 

	if (!passwordRegex.test(password)) { 
		flag = 0; 
		pass.innerText = 
			'Password must be at least 8 characters'+ 
			' long and include at least one number,'+ 
			' one alphabet, and one symbol.'; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 
	if (flag) 
		alert("Form submitted"); 
}



