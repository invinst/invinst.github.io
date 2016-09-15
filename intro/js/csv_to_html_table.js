function init_table(options) {

  options = options || {};
  var csv_path = options.csv_path || "";
  var el = options.element || "table-container";
  var allow_download = options.allow_download || false;
  var csv_options = options.csv_options || {};
  var datatables_options = options.datatables_options || {};

  $("#" + el).html("<table class='table table-striped' id='my-table'></table>");

  $.when($.get(csv_path)).then(
    function(data){

      data = data.replace(/[\r|\r\n]/g, "\n");
      
      var csv_data = $.csv.toArrays(data, csv_options);

      var table_head = "<thead><tr>";

      for (head_id = 0; head_id < csv_data[0].length; head_id++) { 
        table_head += "<th></th>";
      }

      table_head += "</tr></thead>";
      $('#my-table').append(table_head);
      $('#my-table').append("<tbody></tbody>");

      for (row_id = 1; row_id < csv_data.length; row_id++) { 
        var row_html = "<tr>";

          row_html += "<td><strong>" + csv_data[row_id][0] + "</strong></td>";
          row_html += "<td width='50%;'><p>" + csv_data[row_id][1] + "<br /><br /></p></td>";
          
          if (csv_data[row_id][2] == 'Complaint Process')
            row_html += "<td><label class='label label-warning'>" + csv_data[row_id][2] + "</label></td>";
          else if (csv_data[row_id][2] == 'Outcomes')
            row_html += "<td><label class='label label-success'>" + csv_data[row_id][2] + "</label></td>";
          else if (csv_data[row_id][2] == 'Organizational')
            row_html += "<td><label class='label label-info'>" + csv_data[row_id][2] + "</label></td>";
          else
            row_html += "<td>" + csv_data[row_id][2] + "</td>";
          
        row_html += "</tr>";
        $('#my-table tbody').append(row_html);
      }

      $("#my-table").DataTable(datatables_options);

      if (allow_download)
        $("#" + el).append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
    });
}