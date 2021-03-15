<template>
    <div>
        <section class="exampleCard">
            <Card v-bind:card="newCard" />
        </section>
        <section>
            <form class="new__card">
                <div id="card__number__input">
                    <label>Card number</label>
                    <input 
                        class="cardNumberInput" 
                        type="text"
                        v-model="newCard.cardNumber"
                        v-mask=" '#### #### #### ####' "
                        name="cardNumberInput"
                        placeholder="xxxx xxxx xxxx xxxx"
                        minlength="16"
                        maxlength="19"
                        required
                    />
                </div>
                <div id="card__name">
                    <label>Cardholder name</label>
                    <input 
                        class="cardHolder" 
                        type="text"
                        v-model.trim="newCard.cardHolder"
                        name="cardHolder" 
                        placeholder="FIRSTNAME LASTNAME"
                        required
                    />
                </div>
                <div id="card__valid">
                    <label>Valid thru</label>
                    <input 
                        class="cardValid" 
                        type="text"
                        v-model="newCard.valid"
                        v-mask=" '##/##' "
                        name="cardValid"
                        placeholder="MM/YY"
                        minlength="5"
                        maxlength="5"
                        required
                    />
                </div>
                <div id="card__CCV">
                    <label>CCV Number</label>
                    <input 
                        class="cardCCV" 
                        type="text" 
                        v-model.number="newCard.cardCCV"
                        v-mask=" '###' "
                        name="cardCCV"
                        placeholder="xxx"
                        minlength="3"
                        maxlength="3"
                        required
                    />
                </div>
                <div id="card__vendor">
                    <label>card vendor</label>
                    <select class="cardVendor" v-model="newCard.vendor" required>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Evil Corp">Evil Corp</option>
                        <option value="Ninja Bank">Ninja</option>
                        <option value="Block Chain">Block Chain</option>
                    </select>
                </div>
            </form>
        </section>
        <section>
            <button class="addButton" v-on:click="createCard">Add card</button>
        </section>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'CardForm',
    components: {
        Card
    },
    data: () => {
        return {
            newCard: {
                cardNumberInput: '',
                cardHolder: '',
                cardValid: '',
                cardCCV: '',
                cardVendor: ''
            }
        }
    },
    methods: {
        createCard() {
            const newCard = {
                cardNumber: this.newCard.cardNumber,
                cardHolder: this.newCard.cardHolder,
                valid: this.newCard.valid,
                cardCCV: this.newCard.cardCCV,
                vendor: this.newCard.vendor
            };
            console.log(newCard);

            // this.$emit(newCard, cards)
            // this.cards.push(newCard);

            this.$emit('add-new-card', newCard);
            this.$router.push("/");
        }
    }
}
</script>

<style>
#card__number__input {
    grid-area: card__number__input;
}

#card__name {
    grid-area: card__name;
}

#card__valid {
    grid-area: card__valid
}

#card__CCV {
    grid-area: card__CCV;
}

#card__vendor {
    grid-area: card__vendor;
}
</style>