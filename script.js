
let rubrica = {
    contacts: [
        { nome: 'Nicola', telefono: '3331111111' },
        { nome: 'Lorenzo', telefono: '3332222222' },
        { nome: 'Paola', telefono: '3333333333' },
        { nome: 'Jenny', telefono: '3334444444' }
    ],

    // 1. Mostrare tutti i contatti
    mostraTutti: function() {
        console.log(this.contacts);
    },

    // 2. Mostrare un singolo contatto
    mostraContatto: function(nome) {
        let contatto = this.contacts.find(c => c.nome === nome);

        if (contatto) {
            console.log(contatto);
        } else {
            console.log('Contatto non trovato');
        }
    },

    // 3. Eliminare un contatto
    eliminaContatto: function(nome) {
        let indice = this.contacts.findIndex(c => c.nome === nome);

        if (indice !== -1) {
            this.contacts.splice(indice, 1);
            console.log('Contatto eliminato');
        } else {
            console.log('Contatto non trovato');
        }
    },

    // 4. Aggiungere un nuovo contatto
    aggiungiContatto: function(nome, telefono) {
        this.contacts.push({
            nome: nome,
            telefono: telefono
        });

        console.log('Contatto aggiunto');
    },

    // 5. Modificare un contatto (EXTRA)
    modificaContatto: function(nome, nuovoTelefono) {
        let contatto = this.contacts.find(c => c.nome === nome);

        if (contatto) {
            contatto.telefono = nuovoTelefono;
            console.log('Contatto modificato');
        } else {
            console.log('Contatto non trovato');
        }
    }
};


// Visualizzare tutti i contatti
rubrica.mostraTutti();

// Visualizzare Nicola
rubrica.mostraContatto('Nicola');

// Eliminare Lorenzo
rubrica.eliminaContatto('Lorenzo');

// Aggiungere Mario
rubrica.aggiungiContatto('Mario', '3335555555');

// Modificare il telefono di Paola
rubrica.modificaContatto('Paola', '3339999999');

// Visualizzare nuovamente tutti i contatti
rubrica.mostraTutti();