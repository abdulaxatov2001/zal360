# Platon Low-Code Platformasi Qoidalari va Standartlari

Har doim Platon bo'yicha ishlanganda quyidagi qoidalar va konvensiyalarga qat'iy rioya qilinadi:

1. **State qiymatlari**: Faqat `active`, `hidden`, `archive` qiymatlaridan foydalaniladi.
2. **Ko'p tillilik**: 4 ta til ustunlari/maydonlari to'liq hisobga olinadi (1: uz-kirill, 2: ru, 3: uz-lotin, 4: en).
3. **Linklar sintaksisi**:
   - `pages/{sahifa_nomi}`, `forms/{forma_nomi}`, `tables/{jadval_nomi}`
   - Parametrlar uzatish: `@param` (qator katak qiymati), `#param` (query qiymati), `:param` (url parametri).
   - Shartli linklar: `bjs:` (ternary boolean) va `fjs:` (function IIFE).
4. **Vue.js integratsiyasi**: Jadvallardagi `value_transformation` va komponentlarda Vue Options API qoidalari qo'llaniladi.
5. **Foydalanuvchi konteksti**: Foydalanuvchi roli va ruxsatlarini tekshirish uchun `$user.has_perm('...')` yoki `$user.role` ishlatiladi.
6. **Barcha batafsil qo'llanma**: `platon_knowledge/PLATON_MASTER_GUIDE.md` va `.agents/skills/platon-framework/SKILL.md` fayllarida saqlangan.
