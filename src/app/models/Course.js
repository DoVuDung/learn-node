const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Course = new Schema({

        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        // createdAd: {type:Date, default:Date.now},
        // updatedAd: {type:Date, default:Date.now},
        videoId: { type: String, maxLength: 255, required: true },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    }, { timestamps: true, })
    //Add plugins
mongoose.plugin(slug)
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('Course', Course);