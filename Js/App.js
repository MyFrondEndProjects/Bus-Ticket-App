let Peron1btn=document.querySelector(".Peron1btn");
let Peron2btn=document.querySelector(".Peron2btn");
let Peron3btn=document.querySelector(".Peron3btn");
let Peron4btn=document.querySelector(".Peron4btn");
let Peron5btn=document.querySelector(".Peron5btn");
let Peron6btn=document.querySelector(".Peron6btn");
let ticketpanel=document.querySelector(".ticketpanel");
let container=document.querySelector(".container");
let Biletucretiekle=document.querySelector(".Biletucreti");
let Yolculuksaatiekle=document.querySelector(".Yolculuksaati");
let Neredenekle=document.querySelector(".Nereden");
let Nereyeekle=document.querySelector(".Nereye");
let Otobusplakasiekle=document.querySelector(".Otobusplakasi");
let Tarihekle=document.querySelector(".Tarih");
let Biletionaylabtn=document.querySelector(".Biletionayla");
let adsoyadekle=document.querySelector(".Adsoyad");
let telefonnumarasiekle=document.querySelector(".Telefonnumarasi");


let Tarihyaz=document.querySelector(".Tarihyaz");
let Biletucretiyaz=document.querySelector(".Biletucretiyaz");
let Neredenyaz=document.querySelector(".Neredenyaz");
let Nereyeyaz=document.querySelector(".Nereyeyaz");
let Adsoyad=document.querySelector(".Adsoyasyaz");
let Telefonnumarasiyaz=document.querySelector(".Telefonnumarasiyaz");
let Otobüsplakasiyaz=document.querySelector(".Otobüsplakasıyaz");
let Yolculuksaatiyaz=document.querySelector(".Yolculuksaatiyaz");
let Businfo=document.querySelector(".Bus-info");
let kayitform=document.querySelector(".kayitform");
let Maincontainer=document.querySelector(".Main-container");


const seferler = [
    {
        Peronno:"Peron 1",
        Nereden:"Ankara",
        Biletucreti:"500 TL",
        Nereye:"Diyarbakır",
        Tarih:"19-3-2024",
        Otobüsplakası:"56 HZYT 8421",
        Yolculuksaati:"14 saat"
    },
    {
        Peronno:"Peron 2",
        Nereden:"İstanbul",
        Biletucreti:"400 TL",
        Nereye:"Bursa",
        Tarih:"20-3-2024",
        Otobüsplakası:"56 HZYT 2141",
        Yolculuksaati:"1 saat 30 dakika"
    },
    {
        Peronno:"Peron 3",
        Nereden:"İzmir",
        Biletucreti:"280 TL",
        Nereye:"Denizli",
        Tarih:"24-3-2024",
        Otobüsplakası:"56 HZYT 9712",
        Yolculuksaati:"2 saat 35 dakika"
    },
    {
        Peronno:"Peron 4",
        Nereden:"Antalya",
        Biletucreti:"400 TL",
        Nereye:"Adana",
        Tarih:"24-3-2024",
        Otobüsplakası:"56 HZYT 9241",
        Yolculuksaati:"11 saat"
    },
    {
        Peronno:"Peron 5",
        Nereden:"Balıkesir",
        Biletucreti:"190 TL",
        Nereye:"Bursa",
        Tarih:"21-3-2024",
        Otobüsplakası:"56 HZYT 4208",
        Yolculuksaati:"1 saat 45 dakika saat"
    },
    {
        Peronno:"Peron 6",
        Nereden:"Dikili",
        Biletucreti:"180 TL",
        Nereye:"Bandırma",
        Tarih:"25-3-2024",
        Otobüsplakası:"56 HZYT 9840",
        Yolculuksaati:" 2 saat 30"
    }

];


const personeldata = [
    {
        personelnumarasi:"1234",
        sifre:"1234"
    },
    {
        personelnumarasi:"12345",
        sifre:"12345"
    }
] 

Maincontainer.remove();

let personelno=document.createElement("input");
let personelsifre=document.createElement("input");
personelno.placeholder="Personel numaranızı giriniz";
personelsifre.placeholder="Sifrenizi giriniz";
let personelgirisbutton=document.createElement("button");
let pnoinfo=document.createElement("p");
let psifreinfo=document.createElement("p");
let Logincontainer=document.createElement("div");


pnoinfo.textContent="Personel numarası";
psifreinfo.textContent="Personel sifre";

Logincontainer.style.position="absolute";
Logincontainer.style.width="40%";
Logincontainer.style.height="30%";
Logincontainer.style.backgroundColor="Black";
Logincontainer.style.top="30%";
Logincontainer.style.left="29%";
Logincontainer.style.borderRadius="0.5em";
Logincontainer.style.opacity="0.9";


pnoinfo.style.position="absolute";
pnoinfo.style.top="30%";
pnoinfo.style.left="10%";
pnoinfo.style.color="#4169E1";
pnoinfo.style.fontSize="Large";

psifreinfo.style.position="absolute";
psifreinfo.style.top="50%";
psifreinfo.style.left="15.5%";
psifreinfo.style.color="#4169E1";
psifreinfo.style.fontSize="Large";

personelno.type="text";
personelno.style.width="50%";
personelno.style.height="2em";
personelno.style.textAlign="center";
personelno.style.borderRadius="0.5em";
personelno.style.backgroundColor="#4169E1";
personelno.style.Color="white";
personelno.style.position="absolute";
personelno.style.top="30%";
personelno.style.left="34%";

personelsifre.type="password";
personelsifre.style.width="50%";
personelsifre.style.height="2em";
personelsifre.style.textAlign="center";
personelsifre.style.borderRadius="0.5em";
personelsifre.style.backgroundColor="#4169E1";
personelsifre.style.Color="white";
personelsifre.style.position="absolute";
personelsifre.style.top="50%";
personelsifre.style.left="34%";


personelgirisbutton.style.position="absolute";
personelgirisbutton.style.top="70%";
personelgirisbutton.style.left="69%";
personelgirisbutton.textContent="Giris yap";
personelgirisbutton.style.width="15%";
personelgirisbutton.style.height="2em";
personelgirisbutton.style.backgroundColor="#4169E1";
personelgirisbutton.style.borderRadius="0.5em";


Logincontainer.appendChild(personelno);
Logincontainer.appendChild(personelsifre);
Logincontainer.appendChild(personelgirisbutton);
Logincontainer.appendChild(pnoinfo);
Logincontainer.appendChild(psifreinfo);
container.appendChild(Logincontainer);
container.appendChild(kayitform);


kayitform.remove();

const personelgiris= () =>
{
    for(let ii=0; ii<personeldata.length; ii++)
{
   
    if(personeldata[ii].personelnumarasi==personelno.value && personeldata[ii].sifre==personelsifre.value)
    {
        Logincontainer.remove();
        Maincontainer.appendChild(kayitform);
        container.appendChild(Maincontainer);

        const Peron1secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 1")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
            
            
            }
            
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        
        const Peron2secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 2")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
            
            
            }
            
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        
        
        const Peron3secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 3")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
            
            
            }
            
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        
        const Peron4secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 4")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
            
            
            }
            
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        
        
        
        const Peron5secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 5")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
            
            
            }
            
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        const Peron6secildi=() => 
        {
            for(let i=0; i<seferler.length; i++)
            {
               if(seferler[i].Peronno=="Peron 6")
               {
                adsoyadekle.value="";
                telefonnumarasiekle.value="";
                Biletucretiekle.value=seferler[i].Biletucreti;
                Biletucretiekle.value=seferler[i].Biletucreti;
                Yolculuksaatiekle.value=seferler[i].Yolculuksaati;
                Neredenekle.value=seferler[i].Nereden;
                Nereyeekle.value=seferler[i].Nereye;
                Otobusplakasiekle.value=seferler[i].Otobüsplakası;
                Tarihekle.value=seferler[i].Tarih;
               
        
            }
            function Biletonay()
            {
        
                Businfo.remove();
                kayitform.remove();
        
               Biletucretiyaz.textContent=Biletucretiekle.value;
                Adsoyad.textContent=adsoyadekle.value;
                Telefonnumarasiyaz.textContent=telefonnumarasiekle.value;
                Tarihyaz.textContent=Tarihekle.value;
                Nereyeyaz.textContent=Nereyeekle.value;
                Neredenyaz.textContent=Neredenekle.value;
                Otobüsplakasiyaz.textContent=Otobusplakasiekle.value;
                Yolculuksaatiyaz.textContent=Yolculuksaatiekle.value;
        
                ticketpanel.style=" left:20%; top:20%; width:63%; height:50%; ";
                let Yazdır=document.createElement("button");
                Yazdır.textContent="Bilet yazdır";
                Yazdır.style.position="Absolute";
                Yazdır.style.top="64%";
                Yazdır.style.left="70%";
                Yazdır.style.width="8em";
                Yazdır.style.height="2.5em";
                Yazdır.style.backgroundColor="White";
                Yazdır.style.color="#4169E1";
                Yazdır.style.borderRadius="0.5em";
                
        
                const İslemitamamla=() =>
                {
                    let yazdır=ticketpanel;
                    window.print(yazdır);
        
                    location.reload();
                }
                Yazdır.addEventListener("click",İslemitamamla);
                container.appendChild(Yazdır);
        
            
            }
           
        
        
            Biletionaylabtn.addEventListener('click',Biletonay);
               }
        
            
        }
        
        
        
        
        
        
        
        
        
        Peron1btn.addEventListener('click',Peron1secildi);
        Peron2btn.addEventListener('click',Peron2secildi);
        Peron3btn.addEventListener('click',Peron3secildi);
        Peron4btn.addEventListener('click',Peron4secildi);
        Peron5btn.addEventListener('click',Peron5secildi);
        Peron6btn.addEventListener('click',Peron6secildi);
      

    }
}
}

personelgirisbutton.addEventListener('click',personelgiris);

