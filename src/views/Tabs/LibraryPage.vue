<!--Structure-->
<template>
  <ion-toolbar>
    <ion-title>Library</ion-title>
  </ion-toolbar>
  <ion-button @click="presentActionSheet">Open</ion-button>
</template>


<!--Styles -->

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<!--Scripts-->

<script lang="ts">
import { IonButton, actionSheetController } from '@ionic/vue';

export default {
  components: { IonButton },
  setup() {
    const presentActionSheet = async () => {
      const actionSheet = await actionSheetController.create({
        header: 'Actions',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ],
      });

      await actionSheet.present();
    };

    return { presentActionSheet };
  },
};
</script>




