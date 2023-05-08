<template>
  <div class="chatwindow">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">
          {{ doc.createdAt }}
        </span>
        <span class="name">{{ doc.name }}</span>
        <span class="message"> {{ doc.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { computed, ref, onUpdated } from 'vue'
import getCollection from "../composable/getCollection"
import { formatDistanceToNow } from "date-fns"

export default {
    setup () {
        const { error, documents } = getCollection('messages')

        const formattedDocuments = computed(() => {
          if(documents.value) {
            return documents.value.map((doc) => {
              // console.log(doc.createdAt.toDate())
              let time = formatDistanceToNow(doc.createdAt.toDate())
              return { ...doc, createdAt: time }
            })
          }
        })
        
        //auto scroll to bottom of messages
        const messages = ref(null)
        onUpdated(() => {
          // console.log(messages)
          messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
    text-decoration: none;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
    text-decoration: none;
  }
  .message {
    font-weight: normal;
    margin-right: 6px;
    text-decoration: none;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
    margin-left: 12px;
  }
</style>