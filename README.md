# Bagaimana AntD X Tailwind Css?

**AntD**: AntD Merupakan satu set `component UI` library antarmuka yang bervariatif. [AntD](https://ant.design/docs/react/introduce)

**TailwindCss** : Tailwind CSS merupakan `utility-first` kerangka css yang digunakan dengan menggunakan class-class dan dapat disusun untuk membangun sebuah antarmuka. [Tailwind](https://tailwindcss.com/)

Perbedaan antara keduanya Tailwind CSS menyaring css berdasarkan class yang ada pada element html sedangkan AntD memfilter css berdasarkan konfigurasi import.

## Apakah AntD X Tailwind dapat digunakan berbarengan di React?

Tentu saja bisa, seperti beberapa statement dari [komunitas](https://stackoverflow.com/questions/68924385/how-to-use-antdesign-with-tailwindcss-together-in-a-react-project)

"Use Tailwind for the layouting. Like the Grid, Column, and Flex Which mean basic Layout usage, When it comes to a react based component feature like A data table that time use Ant deisgn."

Jadi secara singkat jika untuk segala kebutuhan fitur yang berbasis Js, AntD merupakan pilihan tepat. Namun kebuthan berbasis css, Tailwind Css merupakan pilihan yang terbaik.

Seperti contoh dari projek ini
` <div className="px-10 justify-center md:flex md:flex-wrap items-center"> ... ...
<Card key=.... className="mb-10 mr-5">...</Card>

</div>`

Dan hasilnya seperti [ini](./Image/tailwind%26Ant.png)

## Adakah issue AntD X Tailwind jika digunakan berbarengan di React?

Seperti halnya yang dituliskan [FabioBiondi](https://dev.to/fabiobiondi/react-antd-and-tailwind-fix-css-conflicts-5542) dapat mungkin terjadi conflik css seperti modal component AntD untuk memperlihatkan shows OK dan Cancel untuk secara default

`<Modal title="Add city" onOk={} onCancel={} />`

Seperti screenshot di bawah yang diambil di artikel [FabioBiondi](https://dev.to/fabiobiondi/react-antd-and-tailwind-fix-css-conflicts-5542). Tombol OK tidak terlihat

[image-issue](/Image/Issue-1.png)

Faktanya Tailwind menerapkan warna latar belakang transparan, sedangkan AntD harus menerapkan latar belakang biru:

Seperti screenshot di bawah yang diambil di artikel [FabioBiondi](https://dev.to/fabiobiondi/react-antd-and-tailwind-fix-css-conflicts-5542)

[image-issue](/Image/Issue-2.png)

Dan solusi untuk hal tersebut menonaktifkan tailwind [Preflight](https://tailwindcss.com/docs/preflight)

Seperti screenshot di bawah yang diambil di artikel [FabioBiondi](https://dev.to/fabiobiondi/react-antd-and-tailwind-fix-css-conflicts-5542)

[image-issue](/Image/Issue-3.png.png)

## Kesimpulan

Kombinasi AntD dan Tailwind Css dapat digunakan secara berbarengan. Dengan fungsi kebutuahan masing-masing AntD dengan kebutuhan JS dan Tailwind Css dengan kebutuhan CSS.
