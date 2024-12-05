<script setup>
import { ref, onMounted } from 'vue';
import { usePetStore } from '../stores/pet';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ChevronUpDownIcon } from '@heroicons/vue/16/solid';
import { CheckIcon } from '@heroicons/vue/20/solid';
const store = usePetStore();
const { servers } = store;
onMounted(() => {
  selected.value = {
    name: '品種',
    serve: '服務',
    area: '地區',
  };
});
const selected = ref({
  name: '品種',
  serve: {},
  area: '地區',
});
const selectData = ref({
  name: ['柴犬', '柯基', '波絲貓', '虎斑貓', ''],
  serve: [
    { name: '寵物寄宿', img: 'index/index-5.jpeg' },
    { name: '寵物美容', img: 'index/index-6.jpeg' },
    { name: '到府照顧', img: 'index/index-7.jpeg' },
    { name: '遛狗保母', img: 'index/index-8.jpeg' },
    { name: '行為訓練', img: 'index/index-3.jpeg' },
  ],
  area: ['台北', '台中', '台南'],
});
</script>

<template>
  <main class="w-full">
    <section class="mb-3.75 px-4">
      <div class="mb-3 text-center">
        <h2 class="mb-1 text-[1.75rem] font-bold">寵物服務，盡在 PETPET</h2>
        <p>當您的毛孩有需要時， 幫您找到最合適的服務者！</p>
      </div>
      <Listbox as="div" v-model="selected.name" class="mb-4">
        <div class="relative mt-2">
          <ListboxButton
            class="grid w-full cursor-default grid-cols-1 rounded bg-white py-1.5 pl-3 pr-2 text-left outline outline-1 outline-gray-light focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
          >
            <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-gray-dark">
              <span class="block truncate">{{ selected.name }}</span>
            </span>
            <ChevronUpDownIcon
              class="col-start-1 row-start-1 size-5 self-center justify-self-end fill-black sm:size-4"
              aria-hidden="true"
            />
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-gray focus:outline-none sm:text-sm"
            >
              <!--/* 預設顯示 */-->
              <ListboxOption disabled value="{ name: '品種', id: '' }">
                <div class="relative select-none py-2 pl-3 pr-9 text-gray-dark">
                  <div class="flex items-center">
                    <span class="ml-3 block truncate">品種</span>
                  </div>
                </div>
              </ListboxOption>
              <ListboxOption
                as="template"
                v-for="pet in selectData.name"
                :key="pet"
                :value="pet"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'bg-warning text-white outline-none' : 'text-gray-dark',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                      >{{ pet }}</span
                    >
                  </div>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-gray-dark',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="size-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <Listbox as="div" v-model="selected.serve" class="mb-4">
        <div class="relative mt-2">
          <ListboxButton
            class="grid w-full cursor-default grid-cols-1 rounded bg-white py-1.5 pl-3 pr-2 text-left outline outline-1 outline-gray-light focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
          >
            <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-gray-dark">
              <span class="block truncate">{{ selected.serve }}</span>
            </span>
            <ChevronUpDownIcon
              class="col-start-1 row-start-1 size-5 self-center justify-self-end fill-black sm:size-4"
              aria-hidden="true"
            />
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-gray focus:outline-none sm:text-sm"
            >
              <!--/* 預設顯示 */-->
              <ListboxOption disabled value="{ name: '服務',img:'' }">
                <div class="relative select-none py-2 pl-3 pr-9 text-gray-dark">
                  <div class="flex items-center">
                    <span class="ml-3 block truncate">服務</span>
                  </div>
                </div>
              </ListboxOption>
              <ListboxOption
                as="template"
                v-for="serve in selectData.serve"
                :key="serve.name"
                :value="serve.name"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'bg-warning text-white outline-none' : 'text-gray-dark',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                      >{{ serve.name }}</span
                    >
                  </div>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-gray-dark',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="size-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <Listbox as="div" v-model="selected.area" class="mb-4">
        <div class="relative mt-2">
          <ListboxButton
            class="grid w-full cursor-default grid-cols-1 rounded bg-white py-1.5 pl-3 pr-2 text-left outline outline-1 outline-gray-light focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
          >
            <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-gray-dark">
              <span class="block truncate">{{ selected.area }}</span>
            </span>
            <ChevronUpDownIcon
              class="col-start-1 row-start-1 size-5 self-center justify-self-end fill-black sm:size-4"
              aria-hidden="true"
            />
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-gray focus:outline-none sm:text-sm"
            >
              <!--/* 預設顯示 */-->
              <ListboxOption disabled value="{ area: '地區', id: '' }">
                <div class="relative select-none py-2 pl-3 pr-9 text-gray-dark">
                  <div class="flex items-center">
                    <span class="ml-3 block truncate">地區</span>
                  </div>
                </div>
              </ListboxOption>
              <ListboxOption
                as="template"
                v-for="area in selectData.area"
                :key="area"
                :value="area"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'bg-warning text-white outline-none' : 'text-gray-dark',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                      >{{ area }}</span
                    >
                  </div>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-gray-dark',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="size-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <button class="w-full rounded bg-warning py-2 text-center text-white">搜尋</button>
    </section>
    <section class="mb-3.75 px-4">
      <h2 class="mb-1 text-[2rem] font-bold">本熱門保母</h2>
      <p class="mb-3 text-xl">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
      <div>
        <div class="mb-3 rounded shadow-base" v-for="server in servers" :key="server.id">
          <div class="relative mb-1 h-44 p-1">
            <div
              class="h-3/4 w-full bg-cover bg-center"
              :style="{ backgroundImage: `url(${server.img})` }"
            ></div>
            <img
              class="absolute bottom-0 right-1/2 translate-x-1/2"
              :src="server.avatar"
              :alt="server.name"
            />
          </div>
          <div class="px-7 text-center">
            <h3 class="mb-1">{{ server.name }}</h3>
            <p class="mb-3">{{ server.serve.join('、') }}</p>
            <button class="mb-6 w-2/5 rounded bg-warning py-3 text-white">預約</button>
            <div class="flex justify-evenly">
              <div>
                <p class="mb-3">獲得評價</p>
                <p class="flex justify-center align-middle text-sm">
                  <span class="mr-1 text-[1.75rem] font-bold">{{ server.evaluate }}</span
                  >則
                </p>
              </div>
              <div class="mb-7">
                <p class="mb-3">已完成訂單</p>
                <p class="flex justify-center align-middle text-sm">
                  <span class="mr-1 text-[1.75rem] font-bold">{{ server.volume }}</span
                  >件
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-10">
      <div class="mb-10 px-4">
        <h2 class="mb-1 text-[2rem] font-bold">線上預約</h2>
        <p class="mb-3 text-xl">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
        <div>
          <div
            v-for="serve in selectData.serve"
            :key="serve.name"
            class="relative mb-1 min-h-[8.25rem] w-full rounded bg-cover bg-center"
            :style="{ backgroundImage: `url(${serve.img})` }"
          >
            <div class="absolute inset-0 rounded bg-black/40"></div>
            <h3
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white"
            >
              {{ serve.name }}
            </h3>
          </div>
        </div>
      </div>
      <div
        class="py-3.75 bg-cover bg-center px-[1.375rem] font-bold text-white"
        style="background-image: url('index/index-9.jpeg')"
      >
        <p class="mb-12 text-center text-[2.5rem]">PETPET目前已有</p>
        <ul class="mx-auto w-1/2 flex-col justify-center">
          <li class="mb-3.75 border-l-2 py-4 pl-4">
            <p class="text-5xl leading-normal">5278</p>
            <p class="text-xl font-medium">人使用 PETPET</p>
          </li>
          <li class="mb-3.75 border-l-2 py-4 pl-4">
            <p class="text-5xl leading-normal">580</p>
            <p class="text-xl font-medium">人成為寵物保母</p>
          </li>
          <li class="mb-3.75 border-l-2 py-4 pl-4">
            <p class="text-5xl leading-normal">10000+</p>
            <p class="text-xl font-medium">已完成服務</p>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="px-4">
        <h2 class="mb-1 text-[2rem] font-bold">預約流程</h2>
        <p class="mb-3 text-xl">輕鬆三步驟，立即獲取最佳服務！</p>
        <ul class="mb-3.75">
          <li class="mb-8">
            <p class="mb-1 text-xl">1.查詢想要的服務</p>
            <img class="w-full" src="/index/index-10.png" alt="查詢想要的服務" />
          </li>
          <li class="mb-8">
            <p class="mb-1 text-xl">2.找到合適的保姆</p>
            <img class="w-full" src="/index/index-11.png" alt="查詢想要的服務" />
          </li>
          <li>
            <p class="mb-1 text-xl">3.填寫資料完成預約</p>
            <img class="w-full" src="/index/index-12.png" alt="查詢想要的服務" />
          </li>
        </ul>
      </div>
      <div class="bg-secondary px-4 py-9">
        <h3 class="mb-3 text-2xl font-bold">有任何我們能幫助您的嗎？</h3>
        <p class="mb-4">輸入電子信箱<br />將有專業人員在線幫您解決所有問題</p>
        <div class="flex rounded border border-gray-light">
          <input
            class="w-7/12 rounded-s py-4 pl-3 text-gray"
            type="text"
            value="example@gmail.com"
          />
          <button class="w-5/12 rounded-e bg-warning text-white">送出</button>
        </div>
      </div>
    </section>
  </main>
</template>
