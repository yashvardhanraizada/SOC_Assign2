        $(document).ready(function(){
        $("#myFunction").on("click", function() {
        var value = $("#myInput").val().toLowerCase();
        $("#myTable1 tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
         });
        });
