Vue.component("tab-divisi", {
	props: ["datanya", "icon"],
    template: `<div class="w3-center">
			<ul class="w3-ul">
				<li class="w3-xlarge">Daftar divisi <i :class="icon.plus" @click="$emit('modal')"></i></li>
				<li v-for="(row, index) in datanya" class="w3-hover-light-gray">
				{{row.divisi}}
				<a @click="$emit('edit', index)" class="w3-right w3-tag w3-teal w3-round">
				Edit <i :class="icon.pencil"></i>
				</a>
				</li>
			</ul>
	</div>`
});

Vue.component("tab-bagian", {
	props: ["datanya", "icon"],
    template: `<div class="w3-center">
			<ul class="w3-ul">
				<li class="w3-xlarge">Daftar bagian <i :class="icon.plus" @click="$emit('modal')"></i></li>
				<li v-for="(row, index) in datanya" class="w3-hover-light-gray">
				{{row.bagian}}
				<a @click="$emit('edit', index)" class="w3-right w3-tag w3-teal w3-round">
				Edit <i :class="icon.pencil"></i>
				</a>
				</li>
			</ul>
	</div>`
});

Vue.component("tab-level", {
	props: ["datanya", "icon"],
    template: `<div class="w3-center">
		<span class="w3-xlarge">Daftar level karyawan <i :class="icon.plus" @click="$emit('modal')"></i></span>
		<table class="w3-table w3-striped w3-border w3-margin-top">
			<tr><th>Level</th><th>Total Jam kerja</th><th>Opsi</th<tr>
			<tr v-for="(row, index) in datanya">
				<td>{{row.level}}</td>
				<td>{{row.jamKerja}}</td>
				<td>
				<a @click="$emit('edit', index)" class="w3-tag w3-teal w3-round">
				Edit <i :class="icon.pencil"></i>
				</a>
				</td>
			</tr>
		</table>
	</div>`
});

Vue.component("tab-karyawan", {
	props: ["datanya"],
	template: `<div>Karyawan component</div>`
});

Vue.component("tab-absen", {
	props: ["datanya"],
	template: `<div>Absen component</div>`
});

Vue.component("tab-home", {
	props: ["datanya"],
	template: `<div>
	<div style="font-size:120px">{{datanya.hari+" - "+datanya.bulan+" "+datanya.tanggal+", "+datanya.tahun}}</div>
	<div class="w3-jumbo">{{datanya.jam+" : "+datanya.menit}}</div>
	</div>`
});

Vue.component("form-content", {
	props: ["field", "text", "edit"],
	data () {
		return { 
			satu: "",
			dua: "",
			tiga: "",
			empat: ""
		}
	},
	template: `<div>
		<input v-if="text >=1" :value="edit[0]" type="text" @input="satu = [$event.target.value]">
		<input v-if="text >=2" :value="edit[1]" type="text" @input="dua = $event.target.value">
		<input v-if="text >=3" type="text" @input="tiga = $event.target.value">
		<input v-if="text >=4" type="text" @input="empat = $event.target.value">
		
		<!--Tombol untuk tambah record-->
		<input v-if="!edit" class="w3-button w3-teal w3-round-large" type="submit" 
		value="Tambah" 
		@click="$emit('tambah', { 
			'satu': satu ,
			'dua': dua,
			'tiga': tiga,
			'empat': empat
		})">

		<!--Tombol untuk update-->
		<input v-if="edit" class="w3-button w3-teal w3-round-large" type="submit" 
		value="Update" 
		@click="$emit('update', { 
			'satu': satu ,
			'dua': dua,
			'tiga': tiga,
			'empat': empat
		})">
    </div>`
})
