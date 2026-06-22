import Alpine from 'alpinejs';
import { initReviews } from './reviews';

(window as any).Alpine = Alpine;
Alpine.start();

initReviews();
