---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---

## 🔑 Get your login credentials

<div class="attendee-id-box">
    <h3><b>Get your admin credentials</b></h3>
    <p>Enter your Attendee ID and the lab password provided by your instructor. All configuration entries in the lab guide will be renamed to include your Attendee ID.</p>
    <form id="creds" class="attendee-form" onsubmit="showCredentials()">
        <input type="text" id="creds-id" placeholder="Attendee ID" maxlength="3" autocomplete="off" required>
        <input type="password" id="creds-pw" placeholder="Password" autocomplete="off" required>
        <button type="submit">Show credentials</button>
    </form>
    <p id="creds-result" class="creds-msg"></p>
    <p class="attendee-id-status">Your stored Attendee ID is: <w class="attendee">No ID stored</w></p>
</div>

!!! note "📌 Good to know"
    - The same users can be used for Admin, Supervisor, Agent and Webex Calling user.
    - If you can't call from your mobile, you can use a Webex client with the same users to dial the US number.
    - When you place the test calls, make sure you are using headsets and using the mute buttons.

## 🌸 Overview of the lab's Use Case

Welcome to **Collab PTE 2026: Mastering Cisco Native Workforce engagement management**.

This lab focuses on one topic: **AI Quality Management (AI QM)**. You do not need to build any AI Agent, flow or queue. Everything the customer experiences is already built for you, so you can concentrate on what a supervisor does: define what good service looks like, let AI score the interactions, and use the results to coach the team.

### 🏪 The scenario: a flower store

A flower store receives orders by phone. Calls are answered first by a prebuilt **Webex AI Agent** that talks to the customer in natural language. When the customer asks for it, or the request is too complex, the AI Agent hands the call off to a **human agent** in a queue.

The store's supervisor requires that **both the AI Agent and the human agents always ask for the customer's name and the occasion for the flowers**. Your job is to turn this rule into Evaluation Forms and check whether it is being followed.

### 🤖 Meet the flower store AI Agent

The AI Agent is already configured, published and connected to your voice channel. Its capabilities are:

- 💐 **Recommending flowers** based on the customer's preferences or occasion
- 📝 **Collecting order details** for both standard and custom bouquets
- 💲 **Calculating the total price** in real time
- 🚚 **Gathering delivery information**, including the address and delivery date
- 💬 **Sending order confirmations via SMS**
- 🙋 **Handing off to a human agent**, by transferring the call to a specific queue when the inquiry is complex or the customer asks for a person

!!! info "🔍 Built-in behavior you will evaluate"
    The AI Agent is configured to ask for the **occasion** of the flowers, but it is **not** configured to ask for the customer's **name**. This is intentional. It gives you a known gap to find with AI QM, so you should expect a score of **50%** for the AI Agent in Mission 2.

### 📞 How to interact with the AI Agent

You interact with the AI Agent by phone. You don't have a number of your own: **all attendees call one of the shared dial-in numbers** (UK or US) shown with your credentials above. Because the numbers are shared, the call is tied to your POD later, when you request a handoff.

1. **Call one of the shared dial-in numbers** (UK or US). The AI Agent answers and greets you.
2. **Speak naturally**, as a real customer would. There are no menus or keywords to learn. Speak clearly and wait for the AI Agent to finish before you answer.
3. **Try a few requests**, for example:
    - "I'd like to send flowers for a birthday. What do you recommend?"
    - "I want a custom bouquet with roses and lilies. How much would it cost?"
    - "Please deliver it to my address next Friday."
    - "I'd like to talk to a human agent."
4. **To reach a human agent**, **request a handoff** (for example, "I'd like to talk to a human agent"). The AI Agent then plays a message asking for your **POD / Attendee ID**. Enter it using the phone **keypad (DTMF)**. The call is then transferred to **your** queue and your agent receives it in the Agent Desktop. If you call from the Webex App, use its dialpad to enter the digits.
5. **To finish a call**, say goodbye and disconnect, or let the agent end the call. The interaction then appears under **Completed** in the Supervisor Desktop, where it is scored.

!!! tip "🎧 Headsets"
    Use a headset and mute your microphone when you are not speaking. Background noise can make the AI Agent misunderstand you.

### 🎯 What you will do: the AI QM tasks

The lab has three missions, all done as the **supervisor** in the Supervisor Desktop, plus test calls that you place as the customer and answer as the human agent.

| Mission | What you do | Expected result |
|---|---|---|
| 🧑‍💼 **1. Evaluate the human agent** | Create an Evaluation Form with two questions: *Was the caller's name asked?* and *Has the agent asked what the occasion for the flowers was?* Assign it to your voice queue and publish it. Place a call, ask for a human agent, and as the agent ask for the name but **not** the occasion. Review the score under Monitor > Interactions > Completed. | **50%**: one of two questions was asked |
| 🤖 **2. Evaluate the AI Agent** | Duplicate the form, remove the queue assignment, assign it to your AI Agent, rename it and publish it. Place a call, talk to the AI Agent only, and disconnect. Review the score under Completed interactions. | **50%**: the AI Agent asks for the occasion but not the name |
| 🏅 **3. Configure Coaching Insights** | Enable Coaching Insights for your team and set a threshold on **Average Wrap Up Duration** (1 to 5 seconds, so it is easy to trigger). Place a call, connect it to your agent and let it wrap up. Open Monitor > Team Performance > History and review the insights for each user. | The team's KPI shows which users are outside the threshold |

Evaluation scores can take a few minutes to appear after a call ends, so refresh the Completed interactions list if you do not see a score right away.

### 🧰 What you need before you start

- Your **Attendee ID** (148 to 177) and the lab password, to get your credentials above.
- The **Admin** user to open the Supervisor Desktop, the **Agent** user to answer calls in the Agent Desktop, and a phone or Webex client with a headset to place calls.
- A second browser profile or an incognito window, so you can stay logged in as the supervisor and as the agent at the same time.

## 🎓 Learning Objectives

In this lab, participants will:

- 📋 **Define quality criteria:** Create Evaluation Forms that turn the supervisor's rules into questions the AI can score.
- 🧑‍💼 **Evaluate human agents automatically:** Assign a form to a queue and review AI-generated scores for each completed interaction.
- 🤖 **Evaluate the AI Agent with the same standard:** Assign a form to an AI Agent so that automated and human service are measured in the same way.
- 🏅 **Find coaching opportunities:** Use Coaching Insights and Team Performance to see which agents miss their KPI targets.

## ⚠️ Disclaimer

The lab design and configuration examples provided are for educational purposes. For production design queries, please consult your Cisco representative or an authorized Cisco partner.
