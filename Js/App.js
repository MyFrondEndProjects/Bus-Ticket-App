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
        Nereden:"Ankara",
        Biletucreti:"500 TL",
        Nereye:"Diyarbakır",
        Tarih:"19-3-2024",
        Otobüsplakası:"56 HZYT 8421",
        Yolculuksaati:"14 saat"
    },
    {
        Peronno:"Peron 4",
        Nereden:"Ankara",
        Biletucreti:"500 TL",
        Nereye:"Diyarbakır",
        Tarih:"19-3-2024",
        Otobüsplakası:"56 HZYT 8421",
        Yolculuksaati:"14 saat"
    },
    {
        Peronno:"Peron 5",
        Nereden:"Ankara",
        Biletucreti:"500 TL",
        Nereye:"Diyarbakır",
        Tarih:"19-3-2024",
        Otobüsplakası:"56 HZYT 8421",
        Yolculuksaati:"14 saat"
    },
    {
        Peronno:"Peron 6",
        Nereden:"Ankara",
        Biletucreti:"500 TL",
        Nereye:"Diyarbakır",
        Tarih:"19-3-2024",
        Otobüsplakası:"56 HZYT 8421",
        Yolculuksaati:"14 saat"
    }

]
const Peron1secildi=() => 
{
    for(let i=0; i<seferler.length; i++)
    {
       if(seferler[i].Peronno=="Peron 4")
       {

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
       if(seferler[i].Peronno=="Peron 4")
       {

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
       if(seferler[i].Peronno=="Peron 4")
       {

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