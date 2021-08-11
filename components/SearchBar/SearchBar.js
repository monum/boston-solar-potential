import React, {useEffect, Component } from 'react';
//components

const token = "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw"





export default function SearchBar() {
    //Wait for the component to load before attempting to inject any data

    useEffect(() => {
        //listen to the input form for text being inserted
    const search = document.getElementById("search");
    const matchList = document.getElementById("match-list");
    

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
            <button class="bg-white hover:bg-gray-400 text-left p-2 pr-10 block w-full border-b text-black border-gray-200">
            ${match.MAIL_ADDRESS}, ${match.CITY} 
            </button>
            `).join('');
    
            matchList.innerHTML = html;
        }

        else{
            const html = ``;
            matchList.innerHTML = html;
        }
    }
    
    search.addEventListener('input', () =>searchBoston(search.value));
});
    
    return (
        
    <form autoComplete="off" class="w-full mt-4 flex mx-auto justify-center">
        <input type="text" id="search" class="w-6/12 border-t border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Enter Your Address"/>
        <button class="flex-none rounded-r bg-red-500 text-white font-bold p-4 uppercase border-t border-b border-r ">
            Check My Roof
            </button>
        
</form>

    );
}




//search files and filter




