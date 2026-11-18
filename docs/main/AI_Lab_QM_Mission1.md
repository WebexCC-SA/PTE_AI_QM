---
#icon: material/folder-open-outline
icon: material/medal
---

# 🧑‍💼 Mission 1: Configure Evaluation of human agent's answers

!!! info "Your POD number"
    Your **POD number is the same as your Attendee ID**: <w class="attendee">No ID stored</w>. All the entities you use in this mission (forms, queue, team, channel and AI Agent) belong to your POD and include this number in their names. If you see "No ID stored", get your credentials in the **Lab Overview** first.

## 🎯 Mission overview

!!! abstract "Your mission"
    Create an Evaluation Form with requirements to ask the caller's name and the occasion for the flower purchase. Make test calls and, using the Supervisor Dashboard, evaluate if the human agent asked these questions to the caller.

---

## 🛠️ Build

### 📝 Task 1. Create Evaluation Form

1. Click on **Configurations** and then select **Create a form**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.4.png)

2. In the Form title field, enter (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_Flower_Form_</copy>**. In the Section name field, enter **<copy>Initial_Questions</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.5.png)

3. Configure the first question with the following:<br>
   > Question: **<copy>Was the caller's name asked?</copy>**<br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.6.png)

4. **Add question** and configure the second question with the following:<br>
   > Question: **<copy>Has the agent asked what the occasion for the flowers was?</copy>**<br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.7.png)

5. Scroll up and click on **Add assignment**. From the list of queues, select your queue (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_Voice_Queue</copy>**. Then click on **Assign**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.8.gif)

6. **Publish** the form.
   ![Profiles](../graphics/Lab1_AI_Agent/12.9.png)

### 📞 Task 2. Evaluate the agent using the Evaluation Form

1. Make sure your Agent is in the Available status.
   ![Profiles](../graphics/Lab1_AI_Agent/12.10.png)

2. 📞 **Place a test call.** You don't have your own number, so call one of the shared dial-in numbers:

    | 🇬🇧 UK | 🇺🇸 US |
    |:---:|:---:|
    | **<copy>+442045208103</copy>** | **<copy>+14692501220</copy>** |

    1. 🤖 Talk to the AI Agent and **request a handoff** to a human agent.
    2. 🔢 When the AI Agent asks for your **POD / Attendee ID**, enter it with the phone **keypad (DTMF)**. Your ID: <w class="attendee">No ID stored</w>
    3. 🎧 Answer the call as the agent in the Agent Desktop.
    4. 🗣️ Ask for the caller's name, but **don't** ask what the occasion for the flowers is.

    !!! warning "Enter the ID with the keypad"
        Speaking the digits is not enough. From the **Webex App**, use its **dialpad**.

   ![Profiles](../graphics/Lab1_AI_Agent/12.11.png)

3. In the Monitor section, go to Interactions.
   ![Profiles](../graphics/Lab1_AI_Agent/12.11a.png)

4. Click on **Completed** and review the **Evaluation** column for your call.

    !!! info "⏳ Be patient"
        Depending on the overall system load, it can take a few minutes for the results to show up, so you might not see a score right away. This feedback was already sent to the engineering team.

   ![Profiles](../graphics/Lab1_AI_Agent/12.11b.png)

5. When all processes are completed, the evaluation score appears under Completed Interactions.

    !!! success "✅ Expected result: 50%"
        The score is **50%** because the agent asked only **one of two** questions from the Evaluation Form.
   ![Profiles](../graphics/Lab1_AI_Agent/12.12.png)



---

<p style="text-align:center"><strong>🎉🎉 Congratulations, you have officially completed this mission! 🎉🎉</strong></p>
