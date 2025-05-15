$(function(){
  const $scan = $('#scan-result');

  function reset() {
    $scan.val('').focus();
  }

  reset();

  $scan.on('blur', reset);

  $scan.on('input', function(){
    const result = this.value.trim();
    if (!result) return;

    const [ itemcode, qty, lotid, expirationdate, productiondate, batchno ] = result.split(';');

    const element = `
      <div class="row row-data p-0 custom-radius border">
        <div class="col text-center custom-col-qty">
          <div class="">
            <div class="div-qty-value m-auto">${qty.replace('QTY','')}</div>
            <div>RECEIVED QTY</div>
          </div>
        </div>
        <div class="col p-0 custom-col-description">
          <div class="div-description">
            <p>${itemcode}</p>
            <p>Qty: <span>${qty.replace('QTY','')}</span></p>
            <p>${lotid}</p>
            <p>${batchno}</p>
            <p>PD: <span>${productiondate}</span></p>
            <p>ED: <span>${expirationdate.replace('ED','')}</span></p>
          </div>
        </div>
      </div>`;

    $('.row-scan-result').after(element);

    reset();
  });
});


// /* Once QR is scanned, the result will be the value of input #scan-result */
// $('#scan-result').on('input', function () {
//     const result = this.value;
//     if (!result) return;              // nothing to do if empty

//     // split into individual parts
//     const [itemcode,
//         qty,
//         lotid,
//         expirationdate,
//         productiondate,
//         batchno] = result.split(';');

//     //// update your placeholders
//     //$('#p-itemcode').text(itemcode);
//     //$('#p-device').text('');
//     //$('#p-qty').text(qty.replace('QTY', ''));
//     //$('#p-lotid').text(lotid);
//     //$('#p-batchno').text(batchno);
//     //$('#p-productiondate').text(productiondate);
//     //$('#p-expirationdate').text(expirationdate.replace('ED', ''));

//     // build the new description block
//     const element = `
//         <div class="row row-data p-0 custom-radius border">
//             <div class="col text-center custom-col-qty">
//                 <div class="">
//                     <div class="div-qty-value m-auto">${qty.replace('QTY', '') }</div>
//                     <div>RECEIVED QTY</div>
//                 </div>
//             </div>
//             <div class="col p-0 custom-col-description">
//               <div class="div-description">
//                 <p id="p-itemcode">${itemcode}</p>
//                 <p id="p-device"></p>
//                 <p>Qty:<span id="p-qty">${qty.replace('QTY', '')}</span></p>
//                 <p id="p-lotid">${lotid}</p>
//                 <p id="p-batchno">${batchno}</p>
//                 <p>PD:<span id="p-productiondate">${productiondate}</span></p>
//                 <p>ED:<span id="p-expirationdate">${expirationdate.replace('ED', '')}</span></p>
//               </div>
//             </div>
//         </div>`;

//     $('.row-scan-result').after(element);
//     // $('#scan-result').val("");
// });
