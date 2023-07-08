const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generateRandomPasswords() {
    let passwords1 = ""
    let passwords2 = ""
    for ( i = 0; i < 15; i++) {
        passwords1 += characters[Math.floor(Math.random() * characters.length)]   
    }
    for ( i = 0; i < 15; i++) {
        passwords2 += characters[Math.floor(Math.random() * characters.length)]   
    }
    
    document.getElementById("password-1").value = passwords1
    document.getElementById("password-2").value = passwords2
}






