const regionsBlock = document.querySelector('.regions');
regions(regionsBlock);

function regions(block) {
let regionsArr;

async function getJson() {
	let responce = await fetch('http://webart9f.beget.tech/regions.json');
	let json = await responce.text();
	let arr = JSON.parse(json).data;
	regionsArr = arr;

	const uniqueId = [];
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		arr[i].children = [];
	}

	obj.all = arr.splice(
		arr.findIndex((el) => el.ParentID == null),
		1
	)[0];

	arr
		.filter((el) => el.ParentID == 0)
		.forEach((el) => {
			obj.all.children.push(el);
			uniqueId.push(el.RegionID);
		});

	arr = arr.filter((x) => !uniqueId.includes(x.RegionID));

	obj.all.children.forEach((continent) => {
		includingElems(continent);
		continent.children.forEach((country) => {
			includingElems(country);
			country.children.forEach((region) => {
				includingElems(region);
				region.children.forEach((subRegion) => {
					includingElems(subRegion);
					subRegion.children.forEach((city) => {
						includingElems(city);
					});
				});
			});
		});
	});

	function includingElems(parent) {
		const cityesIndex = arr.filter((el) => el.ParentID == parent.RegionID);

		if (cityesIndex.length) {
			parent.children.push(...cityesIndex);

			cityesIndex.forEach((el) => {
				uniqueId.push(el.RegionID);
			});

			arr = arr.filter((x) => !uniqueId.includes(x.RegionID));
		}
	}

	const container = block.querySelector(".regions__nav");

	function listLoop(object) {
		if (object.children.length) {
			return `
      <li>
		<p class="region-name">
			<a class="regions-plus">+</a>
			<input class="regions-input" id="${object.RegionName}" data-id="${object.RegionID}" type="checkbox" oninput="checkboxEvents(this)"/>
			<label for="${object.RegionName}" >
			<span class="region-span-input"></span>
			
			</label>
			<span class="span-text" onclick="openList(this)">${object.RegionName}</span>
			
		</p>
		<ul>
        ${object.children.map((el) => listLoop(el)).join("")}
      	</ul>
      </li>
    `;
		} else {
			return `<li class="only-one-elem">
				<input id="${object.RegionName}" data-id="${object.RegionID}" class="regions-input" type="checkbox"/>
				<label for="${object.RegionName}" >
					<span class="region-span-input"></span>
				</label>
				<span class="span-text" onclick="openList(this)">${object.RegionName}</span>
			</li>`;
		}
	}

	obj.all.children.forEach(el => { container.innerHTML += listLoop(el) });
	block.querySelectorAll('span').forEach(function (item) {
		item.addEventListener('click', function () {

		})
	})


	block.querySelectorAll('li').forEach(function (li) {

		li.querySelectorAll('label').forEach(function (span) {
			span.addEventListener('click', function () {
				span.parentNode.classList.add('open');
				if (li.querySelector('.regions-plus')) {
					li.querySelector('.regions-plus').classList.add('regions-plus_active')
					if (li.querySelector('.regions-plus').classList.contains('regions-plus_active')) {
						li.querySelector('.regions-plus').innerText = '-';
					} else {
						li.querySelector('.regions-plus').innerText = '+';
					}
				}
			})
		})
	})
	


	block.querySelectorAll('.regions-plus').forEach(function (elem) {
		elem.addEventListener('click', function () {
			elem.parentNode.classList.toggle("open");

			if (elem.parentNode.classList.contains('open')) {
				elem.classList.add('regions-plus_active');
			}
			else {
				elem.classList.remove('regions-plus_active');
			}


			if (elem.classList.contains('regions-plus_active')) {
				elem.innerText = '-';
			}
			else {
				elem.innerText = '+';
			}
		})
	})
}



getJson();

block.querySelector('.regions__btn').addEventListener('click', function () {
	let arr = [];
	let del = [];
	block.querySelectorAll('input').forEach(function (item) {
		if (item.checked) {
			arr.push(+item.dataset.id);
		}
	})
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		const parent = regionsArr.find(obj => obj.RegionID == element).ParentID;
		if (arr.includes(+parent)) del.push(i);
	}
	del.reverse();
	for (let i = 0; i < del.length; i++) {
		const index = del[i];
		arr.splice(index, 1);
	}
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		const parent = block.querySelector(`input[data-id="${element}"]`);
		if (parent) {
			parent.parentNode.parentNode.querySelectorAll('input').forEach((item) => {
				if (!item.checked) {
					arr.push(+item.dataset.id * -1);          
				}
			})
		}
	}

	console.log(arr)
})
}
function checkboxEvents(inp) {
	const container = inp.closest('li')
	const list = container.querySelector('ul').querySelectorAll('li')
	list.forEach(li => {
		if (inp.checked) {
			li.querySelector('input').checked = true;
		} else {
			li.querySelector('input').checked = false
		}
	})
}

function openList(elem) {
	elem.parentNode.classList.toggle("open");
}