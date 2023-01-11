$(document).ready(function() {
    
    $('#selectall').click(function(){
        $("#selectall").css("accent-color", "grey");
        var isChecked = $(this).prop("checked");
        $('#add tr:has(td)').find('input[type="checkbox"]').prop('checked', isChecked);
    });
    $('#add tr:has(td)').find('input[type="checkbox"]').click(function(){
        if($(".case").length != $(".case:checked").length){
            $("#selectall").css("accent-color", "red");
            $('#selectall').attr("checked","checked");
        }
        else if($(".case").length == $(".case:checked").length){
            $("#selectall").css("accent-color", "grey");
            $('#selectall').attr("checked","checked");
        }
        else{
            $("#selectall").attr("checked",false);
        }
    });
});