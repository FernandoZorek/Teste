function mostrar(id,status)
    {
      var a = id.href;
      var id = a.split('#')[1];      
      var s = status+'-'+id;
      var i = document.getElementById('geral-'+id);
      var u = document.getElementById('old_id_sys');
      var y = document.getElementById('old_status_sys');
      var cl = document.getElementsByClassName(s);
      
      if((i.className == "anime-off")&&(u.value != id)){     //  alert('1'); 
        i.className = "anime-on";    
        u.value = id;    
        y.value = status;  
        changeDis(cl, '');
      }
      else if((y.value == status)&&(u.value == id)){      //  alert('2');    
        i.className = "anime-off";    
        changeDis(cl, 'none');
        u.value = '';
        y.value = ''; 
      }
      else if((i.className == "anime-on")&&(u.value == id)){  //   alert('3');    
        i.className = "anime-on";    
        changeDis(cl, '');    
        changeDis(document.getElementsByClassName(y.value+'-'+u.value), 'none');
        u.value = id; 
        y.value = status; 
      }
      else{      //  alert('4'); 
        i.className = "anime-off";    
        changeDis(cl, 'none');
        u.value = '';
        y.value = ''; 
      }
    }
function changeDis(coll, dis){
  for(var i=0, len=coll.length; i<len; i++)
    {
        coll[i].style["display"] = dis;
    }
}
