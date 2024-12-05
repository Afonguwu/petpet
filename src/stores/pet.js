import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePetStore = defineStore('pet', () => {
  const servers = ref([
    {
      id: '1',
      name: 'Jamie',
      serve: ['寄宿', '美容', '寵物行為訓練'],
      evaluate: 198,
      volume: 580,
      avatar: 'person/person-1.png',
      img: 'index/index-2.jpeg',
    },
    {
      id: '2',
      name: 'Eric',
      serve: ['寄宿', '美容'],
      evaluate: 76,
      volume: 208,
      avatar: 'person/person-2.png',
      img: 'index/index-3.jpeg',
    },
    {
      id: '3',
      name: '',
      serve: ['寄宿', '美容', '寵物行為訓練'],
      evaluate: 52,
      volume: 196,
      avatar: 'person/person-3.png',
      img: 'index/index-4.jpeg',
    },
  ]);
  return { servers };
});
