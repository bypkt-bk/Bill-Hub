<script setup>
import { House, UserRound, Search, ReceiptText, Edit } from 'lucide-vue-next';
import Navigation from '@/components/navigation/navigation.vue'
import { ref } from 'vue';
import { Ellipsis } from 'lucide-vue-next';

const bills = ref([
  { bill_id: 1, product: 'John Doe', type: 'เสา', price: '2025-01-05' },
  { bill_id: 2, product: 'Jane Smith', type: 'เสา', price: '2025-01-05', amount: '150' },
  { bill_id: 3, product: 'Alice Johnson', type: 'เสา', price: '2025-01-05', amount: '300' },
]);
function BillPage(bill_id) {
  window.location.href = `/bill/${bill_id}`;
}
</script>

<template>
    <div id="layout">
        <Navigation />
        <div id="data-section">
            <header>
                บุญผองวัศดุก่อสร้าง
            </header>
            <section id="filter-section">
                <div class="search">
                    <Search class="search-icon" />
                    <input type="text" placeholder="Search your customer"
                        @input="(event) => handleText(event.target.value)" />
                </div>
                <select>
                    <option value="latest">Latest Bills</option>
                    <option value="oldest">Oldest Bills</option>
                    <option value="highest_amount">Highest Amount</option>
                    <option value="lowest_amount">Lowest Amount</option>
                </select>
            </section>
            <container class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(bill, id) in bills" :key="id">
                            <td>{{ bill.product }}</td>
                            <td>{{ bill.type }}</td>
                            <td>{{ bill.price }}</td>
                            <td>
                                <Ellipsis />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </container>
        </div>
    </div>
</template>

<style>
#layout {
    display: flex;
    padding: 88px;
    padding-top: 44px;
    padding-bottom: 44px;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    max-height: 1024px;
}

#data-section {
    display: flex;
    padding: 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    height: 100%;
    flex: 1 0 0;
    border-radius: 20px;
    background-color: white;
}

header {

    font-family: monospace;
    font-size: 32px;
    text-align: center;
}

p {

    font-family: monospace;
    text-align: center;
}

#filter-section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 8px;
}

.search-container {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
}

.search {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 8px 12px 8px 20px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    gap: 8px;

}

.search-icon {
    color: black;
}

.search input {
    width: 100%;
    font-size: 14px;
    font-family: monospace;
    outline: none;
}

select {
    width: 100%;
    max-width: 300px;
    padding: 8px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    font-size: 14px;
    background: white;
    appearance: none;
    outline: none;
}

.table-container {
    width: 100%;
    height: 100%;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

thead {
    background-color: #f3f4f6;
    position: sticky;
    top: 0;
}

th,
td {
    padding: 12px;
    border-bottom: 1px solid #E5E7EB;
}

th {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}

td {
    font-size: 14px;
}

tbody {
    display: table-row-group;

}

tbody tr:hover {
    background-color: #f9fafb;
    cursor: pointer;
}
</style>