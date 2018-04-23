function func() 
                {
                    var type = document.getElementsByName("type");
                    if(type[0].checked)
                    {
                        var val = type[0].value;
                        alert(val);
                    }
                    
                    else if(type[1].checked)
                    {
                        var val = type[1].value;
                        alert(val);
                    }
                    
                    else if(type[2].checked)
                    {
                        var val = type[2].value;
                        alert(val);
                    }
                }
                function save()
                {
                  var dataToSave1 = document.getElementById("myInput").value;
                  localStorage.setItem("data1", dataToSave1);
                  var dataToSave2 = document.getElementById("type").value;
                  localStorage.setItem("data2", dataToSave2);
                  var dataToSave3 = document.getElementById("area").value;
                  localStorage.setItem("data3", dataToSave3);
                  
                }
                
                // by Id
                 function func2() 
                {
                  var dataToShow1 = localStorage.getItem("data1");
                var dataToShow3 = localStorage.getItem("data3");
            
                var dataToShow2 = localStorage.getItem("data2");
                
                     

                           
                    if(document.getElementById("h").checked)
                    {     var checks = document.getElementsByName('checks');
                var str = '';
                 
                for ( i = 0; i < 3; i++) {
                     
                    if ( checks[i].checked === true ) {
                        str += checks[i].value +  ",";
                    }
                     
                }
                         
                        var val = document.getElementById("h").value;
                                    document.write("<p> Title: "+dataToShow1);
                                    document.write(" <p> Description: "+dataToShow3);
                                    document.write("<p> Type: "+dataToShow2);
                                    document.write(" <p> Committees: "+str);
                                    document.write("<p> Event requires fee");




                    }
                    
                    else if(document.getElementById("r").checked)
                    {var checks = document.getElementsByName('checks');
                var str = '';
                 
                for ( i = 0; i < 3; i++) {
                     
                    if ( checks[i].checked === true ) {
                        str += checks[i].value +  ",";
                    }
                     
                }
                       
                        var val = document.getElementById("r").value;
                                   document.write("<p> Title: "+dataToShow1);
                                    document.write(" <p> Description: "+dataToShow3);
                                    document.write("<p> Type: "+dataToShow2);
                                    document.write(" <p> Committees: "+str);
                                    document.write("<p> Event not requires fee");


                    }
                    
                    
                    }