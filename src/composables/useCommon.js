import { ref } from 'vue';

export function useCommon() {
  // const formData = ref({ name: '', email: '' });
  // const loading = ref(false);
  // const error = ref(null);

  const isEmpty = (value) => {
    return value === null || value === undefined || (typeof value === 'object' && Object.keys(value).length === 0);
  }

   

  return { isEmpty };
}
