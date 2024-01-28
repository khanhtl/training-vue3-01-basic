<script setup lang="ts">
async function fetchData() 
{  
    return new Promise(async (resolve) => {    
        const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`);    
        setTimeout(async () => resolve(await res.json()), 1000);  
    });
}

const data: any = await fetchData()

</script>

<template>
<table>
    <tr>
        <th>
            <h2>First Name</h2>
        </th>
        <th>
            <h2>Last Name</h2>
        </th>
    </tr>
<tr v-for="e in data">
 <td>{{ e.firstName }}</td>
 <td>{{ e.lastName }}</td>
</tr>
</table>
</template>

<style lang="scss">

</style>