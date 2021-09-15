const smallCups = document.querySelectorAll('.cup-small')
const liters  = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()
  //  fill small cups
	smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlight(idx))
	})
    //  toggle the small cups from full to empty

		function highlight(idx) {
		if(smallCups[idx].classList.contains('full') && !smallCups[idx]
		.nextElementSibling.classList.contains('full')){
			idx--
		}
		  // to fill empty cups before the clicked cup

		smallCups.forEach((cup, idx2) => {
			if(idx2 <= idx) {
				cup.classList.add('full')
			} else {
				cup.classList.remove('full')
			}
		})

		updateBigCup()
		}

		// fill big cup

		function updateBigCup() {
			const fullCups = document.querySelectorAll('.cup-small.full').length
			const totalCups = smallCups.length

			if(fullCups === 0){
				percentage.style.visibility = "hidden"
				percentage.style.height = 0
			} else {
				percentage.style.visibility = 'visible'
				  // calc what's filled
				percentage.style.height = `${fullCups / totalCups * 
				330}px`
				percentage.innerText = `${fullCups / totalCups * 100}%`
			}

    // to calc what's left for the container to fill up
			if(fullCups === totalCups) {
				remained.style.visibility = 'hidden'
				remained.style.height = 0
			} else {
				remained.style.visibility = 'visible'
				liters.innerText = `${2 - (250 * fullCups / 1000)} L`
			}
		}