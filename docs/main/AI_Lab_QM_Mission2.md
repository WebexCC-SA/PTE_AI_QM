---
#icon: material/folder-open-outline
icon: material/medal
---

# 🤖 Mission 2: Configure Evaluation of AI Agent's answers

!!! info "🆔 Your POD number"
    Your **POD number is the same as your Attendee ID**: <w class="attendee">No ID stored</w>. All the entities you use in this mission (forms, queue, team, channel and AI Agent) belong to your POD and include this number in their names. If you see "No ID stored", get your credentials in the **Lab Overview** first.

## 🎯 Mission overview

!!! abstract "Your mission"
    Create an Evaluation Form with the same requirements used for the human agent: ask the caller's name and the occasion for the flower purchase. Assign the form to your AI Agent, make a test call, and have a conversation with the AI Agent. Then, using the Supervisor Dashboard, evaluate if the AI Agent asked the required questions.

---

## 🛠️ Build

### 📝 Task 1. Create Evaluation form for the AI Agent

1. In your Supervisor Desktop (Incognito Window), click on **Configurations** and create a Duplicate of the form that you created for Mission 1 - (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_Flower_Form_</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.25.png)

2. In the Form assignment section, remove the queue. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.25.gif)

3. Instead of the Queues, now select that this form will be assigned to your AI Agent (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>**. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.26.gif)

4. Rename the Form to specify it is for AI Agent tracking. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.27.png)

5. **Publish** the form. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.28.gif)


### 📞 Task 2. Evaluate the AI Agent using the Evaluation form

1. 📞 **Place a test call.** You don't have your own number, so call one of the shared dial-in numbers:

    | 🇬🇧 UK | 🇺🇸 US |
    |:---:|:---:|
    | **<copy>+442045208103</copy>** | **<copy>+14692501220</copy>** |

    Talk to the AI Agent, then disconnect the conversation.

    !!! danger "🚫 Do not request a handoff"
        This call must be handled **entirely by the AI Agent**, so that it is evaluated with the AI Agent form.

2. Go to Completed Interactions. Look for your call and check the evaluation score.

    !!! success "✅ Expected result: 50%"
        The AI Agent is **not** configured to ask the caller's name, but it **is** configured to ask for the occasion for the flowers. So you should see a **50%** score.

   ![Profiles](../graphics/Lab1_AI_Agent/12.29.png)
---

<p style="text-align:center"><strong>🎉🎉 Congratulations, you have officially completed this mission! 🎉🎉</strong></p>
