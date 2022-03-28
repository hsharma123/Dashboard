$(document).ready(function(){
    $(".dash-drop").click(function(){
        $("a.dash span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-dash").toggle();
          $("a.dash span:nth-child(3)").toggleClass("la-angle-right");

        
    });
    $(".lay-drop").click(function(){
        $("a.lay span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-lay").toggle();
          $("a.lay span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".email-drop").click(function(){
        $("a.email span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-email").toggle();
          $("a.email span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".e-com-drop").click(function(){
        $("a.e-com span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-e-com").toggle();
          $("a.e-com span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".social-drop").click(function(){
        $("a.social span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-social").toggle();
          $("a.social span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".project-drop").click(function(){
        $("a.project span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-project").toggle();
          $("a.project span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".contact-drop").click(function(){
        $("a.contact span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-contact").toggle();
          $("a.contact span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".user-drop").click(function(){
        $("a.user span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-user").toggle();
          $("a.user span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".import-drop").click(function(){
        $("a.import span:nth-child(4)").toggleClass("la-angle-down"); 
       $(".subMenu-import").toggle();
          $("a.import span:nth-child(4)").toggleClass("la-angle-right");
         

        
    });
    $(".crud-drop").click(function(){
        $("a.crud span:nth-child(4)").toggleClass("la-angle-down"); 
       $(".subMenu-crud").toggle();
          $("a.crud span:nth-child(4)").toggleClass("la-angle-right");
         

        
    });
    $(".ui-drop").click(function(){
        $("a.ui span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-ui").toggle();
          $("a.ui span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".chart-drop").click(function(){
        $("a.chart span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-chart").toggle();
          $("a.chart span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".forms-drop").click(function(){
        $("a.forms span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-forms").toggle();
          $("a.forms span:nth-child(3)").toggleClass("la-angle-right");
         

        
    });
    $(".table-drop").click(function(){
        $("a.table span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-table").toggle();
          $("a.table span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".wideget-drop").click(function(){
        $("a.wideget span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-wideget").toggle();
          $("a.wideget span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".wizard-drop").click(function(){
        $("a.wizard span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-wizard").toggle();
          $("a.wizard span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".icon-drop").click(function(){
        $("a.icon span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-icon").toggle();
          $("a.icon span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".map-drop").click(function(){
        $("a.map span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-map").toggle();
          $("a.map span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".gallery-drop").click(function(){
        $("a.gallery span:nth-child(3)").toggleClass("la-angle-down"); 
       $(".subMenu-gallery").toggle();
          $("a.gallery span:nth-child(3)").toggleClass("la-angle-right");
    
    });
    $(".base-drop").click(function(){
        $("a.base span:nth-child(4)").toggleClass("la-angle-down"); 
       $(".subMenu-base").toggle();
          $("a.base span:nth-child(4)").toggleClass("la-angle-right");
    
    });
    /* hover effect*/
    $("#nav-toggle:checked + .sidebar li a span:last-child ").hover(function(){
        $(".subMenu-dash").css("display", "block");
        });
});
