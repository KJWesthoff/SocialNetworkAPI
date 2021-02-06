const { Schema, model, Types } = require('mongoose');
const ReactionSchema = require('./Reaction');
const moment = require('moment'); 


const ThoughtSchema = new Schema(
    {
        thoughtText: {
        type:String,
        required:true,
        minlength:1,
        maxlength:260
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: v => moment(v).format('DD/MM/YYYY hh:mm a')

        },
        username:{
            type:String,
            required: true
        },
        reactions:[ReactionSchema],     // Sub document just lives in the Thought document
    },
    {
    toJSON: {
        getters: true,
      },
    }

)
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// put the schema in model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

