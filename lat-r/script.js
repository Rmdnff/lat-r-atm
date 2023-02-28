//fitur bahasa inggris
function inggrisFitur() {
    alert('Fitur tidak tersedia! - Feature not available!')
}

//memasukan pin
const pin = document.getElementById('pin')

function pinCode() {
    if (pin.value.length > 0) {
        if (pin.value == ('123456')) {
            location.href = 'nominal.html'
        } else {
            alert('Pin Yang Anda Masukan Salah')
        }
    } else {
        alert('Pin Tidak Boleh Kosong')
    }
}

//PilihNominal
const tunai = {
    seratus:'100000',
    duaratus:'200000',
    tigaratus:'300000',
    limaratus:'500000',
    satujuta:'1000000',
    satusetengah:'1500000',
    duajuta:'2000000'
}

const saldo = 1000000

function transaksi(value) {
    if (saldo > value) {
        const konfirm= confirm(`Anda akan menarik uang sebesar ${value} saldo anda tinggal sebesar ${saldo - value}`)
        if (konfirm == true) {
            location.href= 'ambilKartu.html'
        }
    } else {
        alert('saldo anda tidak mencukupi')
    }
}

function transaksiLain() {
    const konfir = confirm('Fitur tidak tersedia, apakah anda ingin membatalkan ?')
    if (konfir) {
        location.href='ambilKartu.html'
    }
}