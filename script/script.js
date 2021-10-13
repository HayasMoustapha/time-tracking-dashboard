const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const card = document.querySelectorAll("[class*='card-']")
const links =  document.querySelectorAll('ul li')
const periods = ["daily" , "weekly" , "monthly"]
const moments = ["Day" , "Week" , "Month"]

window.onload = ()=>{
  for(let i = 0 ; i < 6 ; i++) {
    document.querySelector(`div[data-page = "${i}"] .title`).innerText = data[i]["title"]
    document.querySelector(`div[data-page = "${i}"] .current`).innerText = data[i]["timeframes"]["weekly"]["current"]+"hrs"
    document.querySelector(`div[data-page = "${i}"] .previous .last-time`).innerText = "Last "+ moments[1]
    document.querySelector(`div[data-page = "${i}"] .previous .time`).innerText = data[i]["timeframes"]["weekly"]["previous"]+"hrs"
  }
}


for(let i = 0 ; i < 6 ; i++) {
  document.querySelector(`div[data-page = "${i}"] .title`).innerText = data[i]["title"]
  for(let j = 0 ; j < 3 ; j++){
    links[j].addEventListener('click' , ()=>{
      links[j].children[0].classList.add('active')
      switch(j){
          case 0:
            links[j+1].children[0].classList.remove('active')
            links[j+2].children[0].classList.remove('active')
            break;
          case 1:
            links[j+1].children[0].classList.remove('active')
            links[j-1].children[0].classList.remove('active')
            break;
          case 2:
            links[j-1].children[0].classList.remove('active')
            links[j-2].children[0].classList.remove('active')
            break;
      }
      document.querySelector(`div[data-page = "${i}"] .current`).innerText = data[i]["timeframes"][periods[j]]["current"]+"hrs"
      document.querySelector(`div[data-page = "${i}"] .previous .last-time`).innerText = "Last "+ moments[j]
      document.querySelector(`div[data-page = "${i}"] .previous .time`).innerText = data[i]["timeframes"][periods[j]]["previous"]+"hrs"
    })
  }
}

