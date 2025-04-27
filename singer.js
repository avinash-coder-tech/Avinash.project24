const singers = [
    { name: "Arijit Singh", songs: 50, views: "1,000,000,000", image: "images/arijit.jpg" },
    { name: "Guru Randhawa", songs: 45, views: "800,000,000", image: "images/guru.jpg" },
    { name: "Neha Kakkar", songs: 60, views: "1,200,000,000", image: "images/neha.jpg" },
    { name: "Badshah", songs: 70, views: "2,500,000,000", image: "images/badshah.jpg" },
    { name: "Ami Singh", songs: 15, views: "450,000,000", image: "images/ami.jpg" },
    { name: "Jass Manak", songs: 40, views: "900,000,000", image: "images/jass.jpg" },
    { name: "Karan Aujla", songs: 38, views: "1,100,000,000", image: "images/karan.jpg" },
    { name: "Shreya Ghosal", songs: 55, views: "1,500,000,000", image: "images/shreya.jpg" },
    { name: "Sidhu Moosewala", songs: 30, views: "2,200,000,000", image: "images/sidhu.jpg" },
    { name: "B Praak", songs: 20, views: "800,000,000", image: "images/bprak.jpg" },
    { name: "Tulsi Kumar", songs: 25, views: "650,000,000", image: "images/tulsi.jpg" },
    { name: "Rahat Fateh Ali Khan", songs: 40, views: "1,000,000,000", image: "images/rahat.jpg" },
    { name: "Harrdy Sandhu", songs: 35, views: "950,000,000", image: "images/harrdy.jpg" },
    { name: "Diljit Dosanjh", songs: 60, views: "3,000,000,000", image: "images/diljit.jpg" },
    { name: "Asha Bhosle", songs: 75, views: "2,500,000,000", image: "images/asha.jpg" },
    { name: "Yo Yo Honey Singh", songs: 80, views: "2,800,000,000", image: "images/honey.jpg" },
    { name: "Vishal-Shekhar", songs: 65, views: "1,800,000,000", image: "images/vishal.jpg" },
    { name: "Papon", songs: 55, views: "1,000,000,000", image: "images/papon.jpg" },
    { name: "A. R. Rahman", songs: 100, views: "3,500,000,000", image: "images/arrahman.jpg" },
    { name: "Shilpa Rao", songs: 40, views: "850,000,000", image: "images/shilpa.jpg" },
    { name: "Sunidhi Chauhan", songs: 70, views: "2,400,000,000", image: "images/sunidhi.jpg" },
    { name: "Ankit Tiwari", songs: 30, views: "1,500,000,000", image: "images/ankit.jpg" },
    { name: "Neeti Mohan", songs: 30, views: "1,200,000,000", image: "images/neeti.jpg" },
    { name: "Udit Narayan", songs: 100, views: "5,000,000,000", image: "images/udit.jpg" },
    { name: "Kailasa", songs: 50, views: "1,800,000,000", image: "images/kailasa.jpg" },
    { name: "Mohit Chauhan", songs: 45, views: "1,300,000,000", image: "images/mohit.jpg" },
    { name: "Arman Malik", songs: 50, views: "1,600,000,000", image: "images/arman.jpg" },
    { name: "Richa Sharma", songs: 35, views: "900,000,000", image: "images/richa.jpg" },
    { name: "Sonu Nigam", songs: 200, views: "8,000,000,000", image: "images/sonu.jpg" },
    { name: "Zubeen Garg", songs: 60, views: "1,400,000,000", image: "images/zubeen.jpg" }
];

const tableBody = document.querySelector("#singersTable tbody");

singers.forEach(singer => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${singer.image}" alt="${singer.name}" class="singer-img"></td>
        <td>${singer.name}</td>
        <td>${singer.songs}</td>
        <td>${singer.views}</td>
    `;
    tableBody.appendChild(row);
});
