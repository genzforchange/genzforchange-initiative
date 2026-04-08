$(document).ready(function () {
  Papa.parse('data.csv', {
    download: true,
    header: true,
    skipEmptyLines: 'greedy',
    complete: function (results) {
      var container = $('#initiatives-container');
      container.empty();

      results.data.forEach(function (row, index) {
        var title = (row.ProjectTitle || '').trim();
        var description = (row.Description || '').trim();
        var link = (row.ProjectLink || '').trim();
        var image = (row.Image || '').trim();

        if (!title) return;

        if (link && !/^https?:\/\//i.test(link)) {
          link = 'https://' + link;
        }

        var imgSrc = image ? image : 'assets/test.png';
        var reverseClass = index % 2 !== 0 ? ' reverse' : '';

        var $item = $('<div>').addClass('workflow-item' + reverseClass);

        var $img = $('<img>').attr('src', imgSrc).attr('alt', title);
        $item.append($img);

        var $desc = $('<div>').addClass('description');

        var $h2 = $('<h2>');
        if (link) {
          var $a = $('<a>').attr('href', link).attr('target', '_blank').attr('rel', 'noopener noreferrer').text(title);
          $h2.append($a);
        } else {
          $h2.text(title);
        }
        $desc.append($h2);

        var $p = $('<p>').text(description);
        $desc.append($p);

        $item.append($desc);
        container.append($item);
      });
    },
    error: function () {
      console.error('Failed to load initiatives data.');
    }
  });
});
