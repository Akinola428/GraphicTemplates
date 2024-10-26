let availableKeywords = [
    'church fliers',
    'Kareoke flier',
    'vintage logo design',
    'reciept',
    'invoice',
    'birthday flier',
    'Modern Logo Design',
    'church banner',
    'admission fliers',
    'POS flier',
    'Electricity flier',
    'sanitation flier',
    'letterheads',
    'Branding Flier',
    'Banking flier',
    'Car Dealership flier',
    'restaurant/food flier',
    'restaurant/food menu',
    'clothing brand logo',
    'clothing flier',
    'laundromat/dry cleaner flier',
    'health care flier',
    'admission banner',
    'baking &pasteries flier',
    'Examination entry flier',
    'Skiil acquisition Programme flier',
    'Halloween party flier',
    'Party flier',
    'Bill template',
    'Business Card Design',
    'Help Wanted Flier',
    'Real Estate Flier',
    'Laundromaut/Dry cleaning Business Card',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return"<li onclick= selectInput(this)>"  + list + "</li>";
    })
    resultsBox.innerHTML="<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value=list.innerHTML
    resultsBox.innerHTML='';
}