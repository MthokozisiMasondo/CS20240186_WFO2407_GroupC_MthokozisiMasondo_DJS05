class TallyStateManager {
    constructor(initialCount = 0) {
        // Storing the counter value
        this.state = {
            count: initialCount
        }
// Tracking current state
this.currentState = ""

// Logging the initialization
console.log("Tally State Manager Initialized", { initialState: this.state })
    }

// Scenario 1: Initial State Verification
getState() {
    console.group("Initial State Verification")
    console.log({
        description: "Checking initial state value",
        currentState: this.state,
    })
    console.groupEnd()

    // Return copy of state
    return { ...this.state }
}

// Processing state transitions based on actions
dispatch(action) {
    // Store previous state
    const previousState = { ...this.state }

    // Proccesing actions
    switch(action) {
        // Scenario 2: ADD
        case 'ADD': {
            // Increment counter
            this.state.count += 1

            console.group("Incrementing the Counter")
            console.log({
                action: "ADD",
                description: "Incrementing counter by 1",
                previousCount: previousState.count,
                newCount: this.state.count
            })
            console.groupEnd()
            break
        }

        // Scenario 3: SUBTRACT
        case 'SUBTRACT': {
            // Decrement counter
            this.state.count -= 1

            console.group("Decrementing the Counter")
            console.log({
                action: "SUBTRACT",
                description: "Decrementing counter by 1",
                previousCount: previousState.count,
                newCount: this.state.count
            })
            console.groupEnd()
            break
        }

        // Scenario 4: RESET
        case 'RESET': {
            // Reset counter to initial value
            this.state.count = 0

            console.group("Resetting the Counter")
            console.log({
                action: "RESET",
                description: "Resetting counter to 0",
                previousCount: previousState.count,
                newCount: this.state.count
            })
            console.groupEnd()
            break 
        }
    }
 }
}

// Creating new instance
const counter = new TallyStateManager()

// Scenario 1 - Verify initial state
console.log('Scenario 1 - Initial State Check:')
console.log('Expected: Count should be equal to 0')
counter.getState()

// Scenario 2 - Test double increment
console.log('Scenario 2 - Double Increment:')
console.log('Expected: Count should become 2')
counter.dispatch('ADD')
counter.dispatch('ADD')

// Scenario 3 - Test single decrement
console.log('Scenario 3 - Single Decrement:')
console.log('Expected: Count should become 1')
counter.dispatch('SUBTRACT')

// Scenario 4 - Test reset functionality
console.log('Scenario 4 - Reset:')
console.log('Expected: Count should return to 0')
counter.dispatch('RESET')



