$(function(){
  const $scan = $('#scan-result');

  function reset() {
    $scan.val('').focus();
  }

  reset();

  $scan.on('blur', reset);

  $scan.on('input', function () {
    const result = this.value.trim();

    // Expect exactly 6 parts: CODE;QTY##;LOT...;ED...;PD...;BATCH
    if (result.split(';').length == 6) {
        $(".row-default").hide();
        scanData.push(result);

        const [itemcode, qty, lotid, expirationdate, productiondate, batchno] = result.split(';');
        const element = `
        <div class="row row-data p-0 custom-radius border">
        <div class="col text-center custom-col-qty">
            <div class="">
            <div class="div-qty-value m-auto">${qty.replace('QTY', '')}</div>
            <div>RECEIVED QTY</div>
            </div>
        </div>
        <div class="col p-0 custom-col-description">
            <div class="div-description">
            <p>${itemcode}</p>
            <p>Qty: <span>${qty.replace('QTY', '')}</span></p>
            <p>${lotid}</p>
            <p>${batchno}</p>
            <p>PD: <span>${productiondate}</span></p>
            <p>ED: <span>${expirationdate.replace('ED', '')}</span></p>
            </div>
        </div>
        </div>`;

        $('.row-scan-result').after(element);
    }
    reset();
});
