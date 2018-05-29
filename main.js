let elizabethObject = {
    congressionalDistrict: '4',
    platformStatements:{taxes:'Less taxes maybe probably',jobs:'More jobs maybe probably',infrastructure:'good stuff',healthCare:'people should probably be taken care of',crimeEnforcement:'laws should probably most definitely maybe be followed'},
    urlDonation:'https://www.idek.com/donate2mehplz',
    calenderEvents:{
    january: {
        1: 'travel',
        23: 'speech',
        25: 'kiss babies'
    },
    february: {
        3: 'save a kitten',
        24: 'grease some palms',
        29: 'wonder at the leap day'
    },
},
    volunteerInfo:{name:'Jane Doe',address:'1234 This Address Is False Street, Nowhereville, QQ 12345',email:'whoami@plzhelpme.net',phoneNum:'123-456-7890',availability:'never',activitiesWilling:'nothing'},
    biography:'I love pizza, chicken tenders, and shrimp',
    imgGallery:{headShot:'ugly.jpg',picOfFam:'fam.jpg',picOfConstituents:'const.jpg'},
    missionStatement:'Gotsta helps peoples',
    urlVote:'https://www.idek.com/vote4meh'
}


//code for first challenge


function changeStuff (objectToTarget, theKey, theValue) {
    objectToTarget[theKey] = theValue;

}

//changeStuff (elizabethObject, 'congressionalDistrict', 'theValue');
//changeStuff(elizabethObject.platformStatements, 'taxes', 'asdf');
console.log(elizabethObject);


//second challenge code

function createArticle() {
    //making the article and appending it to the dom
    let article = document.createElement('article');
    article.setAttribute("id", elizabethObject.congressionalDistrict);
    document.querySelector("body").appendChild(article);
    return article;
}

function createHeading(nameOfHeading) {
    let headOne = document.createElement("h1");
    let headOneText = document.createTextNode = nameOfHeading;
    headOne.textContent = headOneText;
    document.getElementById('4').appendChild(headOne);
    return headOne;
}

//objectName is to order my different uls depending on which object
function createUl(objectName) {
    let ul = document.createElement("ul");
    ul.setAttribute('id', objectName);
    document.getElementById('4').appendChild(ul);
    return ul;
}

function createLi(keyName) {
    let li = document.createElement('li');
    let liText = document.createTextNode = `${elizabethObject.platformStatements}`//make for in loop so that every key value pair is put in an li
    li.textContent =liText
    document.getElementById(keyName).appendChild(li);
    return li;
}

createArticle();
createHeading('platform statements');
createUl('platform statements');
createLi('platform statements');
createHeading('calender events');