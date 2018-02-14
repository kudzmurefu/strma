// Unchangeble Variables://
var count = 1;
var a = 0
var sliderWidth = -250;
var count1 = "";
        // NEXT BUTTON functionality
        $("#NEXTbuutton").click(function(){
                    var countCheck = sessionStorage.getItem("count1");

                                                    // Quick Checks to ensure slide operates within allocated width area.
                                                    merginTracker = sessionStorage.getItem("mergin");
                                                    
                                                    if(merginTracker < 1){
                                                        $("#innerContainer").addClass(".slideDisable");
                                                        $("#innerContainer").removeClass(".slideEnable");    
                                                        $("#innerContainer").css({position:"0"});
                                                        console.log("ClassDisable");
                                                        }
                                                        else if (merginTracker >=1 || merginTracker == null){
                                                            $("#innerContainer").addClass(".slideEnable");
                                                            $("#backButton").prop("disabled", false);
                                                            $("#innerContainer").css({"right":"  "});  
                                                            $("#innerContainer").removeClass(".slideDisable");
                                                            $("#innerContainer").css({position:"relative"}) 
                                                            console.log("Class Enabled");
                                                        }

                        if( countCheck == 0){
                            console.log("count1 equal to 0");
                            sessionStorage.removeItem('count1');
                            count1 = 1;
                        }
                            else if (countCheck >=1){
                            count1++;
                            }
                                else{
                                    count1 = count++;
                                }

                        divTotal = $('#innerContainer > div').length;
                        slideLength = ((50 + 30)*divTotal);
                        slideLengthpx = ((50 + 30)*divTotal)+"px";
                        var mergin = - (count1*sliderWidth);
                        var merginpx = (-mergin) + 'px';
                                            
                        if(mergin >= slideLength){
                        var contents = $("#innerContainer");
                            }
                            else{
                            $("#innerContainer").animate({'left': merginpx});
                            $("#innerContainer").css({'right': ''});
                            sessionStorage.removeItem("count1");
                            sessionStorage.setItem("count1",count1);
                            sessionStorage.setItem("mergin",mergin);
                                }


        });
        // NEXT BUTTON functionality
        $("#BACKbuutton").click(function(){
                        var increment2 = 250;
                        c = sessionStorage.getItem("count1");
                        merginTracker = sessionStorage.getItem("mergin");
                        
                                    if(merginTracker < 1){
                                        $("#innerContainer").addClass(".slideDisable");
                                        $("#innerContainer").removeClass(".slideEnable");    
                                        $("#innerContainer").removeAttr('style'); 
                                        $("#backButton").prop("disabled", true);
                                        $("#innerContainer").css({"right":"  "}); 
                                        console.log("ClassDisable");
                                        }
                                        else if (merginTracker >1 || merginTracker == null){
                                            $("#innerContainer").css({"right":"  "}); 
                                            $("#innerContainer").addClass(".slideEnable"); 
                                            $("#innerContainer").removeClass(".slideDisable");
                                            $("#backButton").prop("disabled", false);
                                            console.log("Class Enabled")
                                        }
                                    
                            if(count1 > 1){
                            var count2 = (c - 1);
                                }
                                    else{
                                        var    count2 = (c - 1)*0;
                                        }
                                
                        mergin3 = count2*increment2;
                        
                        $("#innerContainer").animate({'right': mergin3});
                        sessionStorage.setItem("count1",count1);
                        sessionStorage.setItem("mergin",mergin3)

                            if(c >= 1){
                            c--;
                            sessionStorage.removeItem("count1");       
                            sessionStorage.setItem("count1",c);
                            }
                                else{
                                    sessionStorage.removeItem("count1");
                                    c = a;
                                    sessionStorage.setItem("count1", c);
                                }
                        $("#innerContainer").css({'left': ''});
                        console.log("Count1 AFter:" + c);
                        console.log(" ");
        
        })
 //................................................