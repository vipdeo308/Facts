async function getFact(url)
{
    var german = document.getElementById('de')

    if(german.checked)
        url += "?language=de"
    else 
        url += "?language=en"
    
    let raw = await fetch(url)
    let fact = await raw.json()

    return (fact.text)    
}

async function displayToday()
{    
    let url = "https://uselessfacts.jsph.pl/api/v2/facts/today"
    let text = await getFact(url)
    alert("Today's Fact: "+text)
}

async function displayRandom()
{
    let url = "https://uselessfacts.jsph.pl/api/v2/facts/random"
    let text = await getFact(url)
    alert("Random Fact: "+text)
}
