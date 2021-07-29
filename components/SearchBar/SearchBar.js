import React, {useEffect, Component } from 'react';
//components

const token = "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw"


export default function SearchBar() {
    //Wait for the component to load before attempting to inject any data

    useEffect(() => {
        //listen to the input form for text being inserted
    const search = document.getElementById("search");
    const matchList = document.getElementById('match-list');
    

    const searchBoston = async searchText => {
        const res = await fetch('https://data.boston.gov/datastore/odata3.0/c4b7331e-e213-45a5-adda-052e4dd31d41?$format=json');
        const data = await res.json();
        const addresses = data.value;
    
        let matches = addresses.filter(address => {
            const regex = new RegExp(`^${searchText}`, 'gi');

            return address.MAIL_ADDRESS.match(regex)
        });
    
        if(searchText.length == 0){
            matches = [];
        };
    
        outputHTML(matches);
    };
    
    const outputHTML = matches => {
        if(matches.length > 0){
            const html = matches.map(match => `
            <div class="w-5/6 rounded-l p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white">
            <p> ${match.MAIL_ADDRESS}, ${match.CITY} </p>
            </div>
            `).join('');
    
            matchList.innerHTML = html;
        }
    }
    
    search.addEventListener('input', () =>searchBoston(search.value));
});
    
    return (
        
    <form class="m-4 flex w-full">
        <input type="text" id="search" class="w-full rounded-l p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Enter Your Address"/>
        <button class="flex-none rounded-r bg-red-500  text-white font-bold p-4 uppercase border-t border-b border-r ">
            Check My Roof
            </button>
        
</form>

    );
}




//search files and filter




