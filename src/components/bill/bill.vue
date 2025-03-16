<script setup lang="ts">
import { House, UserRound, Printer, Plus } from 'lucide-vue-next';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { ref, onMounted, watch } from 'vue';
import Navigation from '@/components/navigation/navigation.vue'

interface Item {
  item_id: number;
  product: string;
  unitPrice: number;
}

interface SelectedItem extends Item {
  quantity: number | null;
}

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
});
const value = ref<DateValue>();

const items = ref<Item[]>([
  { item_id: 1, product: 'Apple', unitPrice: 12 },
  { item_id: 2, product: 'Banana', unitPrice: 8 },
  { item_id: 3, product: 'Cherry', unitPrice: 15 },
  { item_id: 4, product: 'Date', unitPrice: 20 },
  { item_id: 5, product: 'Eggplant', unitPrice: 25 },
]);

const item_select = ref<SelectedItem[]>([]);

const isItemSelected = (item: Item): boolean => {
  return item_select.value.some((selected) => selected.item_id === item.item_id);
};

const toggleItem = (item: Item, event: Event): void => {
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    item_select.value.push({
      ...item,
      quantity: null,
    });
  } else {
    item_select.value = item_select.value.filter((selected) => selected.item_id !== item.item_id);
  }
};

const total = (item_select: SelectedItem[]): number => {
  return item_select.reduce((sum, item) => {
    return sum + (item.quantity || 0) * item.unitPrice;
  }, 0);
};

function HomePage() {
  window.location.href = '/home/1';
}
</script>

<template>
    <div id="layout">
        <Navigation />
        <div id="data-section">
            <header>
                บุญผองวัศดุก่อสร้าง
            </header>
            <p>171 หมู่14 ถนน อุบล-ตระการ ตำบลไร่น้อย อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี</p>
            <section>
                <div class="relative flex flex-1 min-w-[300px]">
                    <input type="text" class="customername-input">
                    <small class="absolute top-[-10px] left-2 px-1 bg-white">
                        Customer Name</small></input>
                </div>
                <Popover>
                    <PopoverTrigger as-child>
                        <button variant="outline" :class="cn(
                            'flex flex-row min-w-[180px] w-full h-[40px] items-center justify-start border-[1px] border-solid border-[#E5E7EB] rounded-[6px] px-4 text-left text-[14px]',
                            !value && 'text-muted-foreground',
                        )">
                            <CalendarIcon class="mr-2 h-4 w-4" />
                            {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent class="w-auto p-0">
                        <Calendar v-model="value" initial-focus />
                    </PopoverContent>
                </Popover>
            </section>
            <div class="relative w-full">
                <input type="text" class="address-input" />
                <small class="absolute top-[-10px] left-2 px-1 bg-white">Address</small>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>จำนวน</th>
                            <th>รายการ</th>
                            <th>ราคา/หน่วย</th>
                            <th>รวม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, product) in item_select" :key="product">
                            <td>
                                <input type="number"
                                    class="input-item w-full max-w-12 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    v-model="item.quantity">
                            </td>
                            <td>
                                {{ item.product }}</td>
                            <td>
                                {{ item.unitPrice }}
                            </td>
                            <td>
                                {{ (item.quantity || 0) * item.unitPrice }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-between items-center w-full">
                <p class="text-xl">total: {{ total(item_select) }}</p>
                <div class="flex self-end gap-2">
                    <button
                        class="w-[90px] h-fit p-2 px-4 text-[14px] text-neutral-700 rounded-[6px] border border-neutral-700"
                        @click="HomePage">
                        Cancel
                    </button>
                    <button
                        class="w-[90px] h-fit p-2 px-4 text-[14px] bg-neutral-700 text-white rounded-[6px] border border-neutral-700">
                        Save
                    </button>
                </div>
            </div>
        </div>

        <div id="items-section">
            <header>
                Product
            </header>
            <section>
                <div class="relative flex flex-1 min-w-[300px]">
                    <input type="text" class="customername-input">
                    <small class="absolute top-[-10px] left-2 px-1 bg-white">
                        Product</small></input>
                </div>
            </section>
            <div class="table-container">

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="item.item_id" class="hover:bg-slate-50">
                            <td>
                                <input type="checkbox" :id="'item' + item.item_id" :checked="isItemSelected(item)"
                                    @change="toggleItem(item, $event)" />
                            </td>
                            <td>{{ item.product }}</td>
                            <td>
                                <p>{{ item.unitPrice }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

small {
    font-family: monospace;
    text-align: center;

}

section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 8px;
}

.customername-input {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 8px 12px 8px 20px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    min-width: 300px;
    font-size: 14px;
    font-family: monospace;
    outline: none;
}

.address-input {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 8px 12px 8px 20px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    font-size: 14px;
    font-family: monospace;
    outline: none;
    line-height: auto;
}

.table-container {
    width: 100%;
    height: 100%;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    overflow-y: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-family: monospace;
}

thead {
    background-color: #f3f4f6;
    position: sticky;
    top: 0;

}

th,
td {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #E5E7EB;
}

th {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

td {
    font-size: 14px;
}

tbody {
    display: table-row-group;
}

.input-item {
    height: 32px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
}

#items-section {
    display: flex;
    padding: 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    height: 100%;
    max-width: 400px;
    flex: 1 0 0;
    border-radius: 20px;
    background-color: white;
}
</style>