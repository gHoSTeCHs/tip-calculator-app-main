const btns = document.querySelectorAll(".btn");
const bill = document.querySelector(".bill");

function log() {
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const val = parseInt(e.target.value);
			function billing() {
				const bills = bill.value;
				console.log(bills);
			}
			bill.addEventListener("input", billing);
			console.log(val);
		});
	});
}

log();
