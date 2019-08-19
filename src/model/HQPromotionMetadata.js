/**
 * API v1.0
 * API version 1.0.
 *
 * The version of the OpenAPI document: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HQPromotionMetadata model module.
 * @module model/HQPromotionMetadata
 * @version v1
 */
class HQPromotionMetadata {
    /**
     * Constructs a new <code>HQPromotionMetadata</code>.
     * @alias module:model/HQPromotionMetadata
     */
    constructor() { 
        
        HQPromotionMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HQPromotionMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HQPromotionMetadata} obj Optional instance to populate.
     * @return {module:model/HQPromotionMetadata} The populated <code>HQPromotionMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HQPromotionMetadata();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('iconData')) {
                obj['iconData'] = ApiClient.convertToType(data['iconData'], 'String');
            }
            if (data.hasOwnProperty('linkSubText')) {
                obj['linkSubText'] = ApiClient.convertToType(data['linkSubText'], 'String');
            }
            if (data.hasOwnProperty('linkText')) {
                obj['linkText'] = ApiClient.convertToType(data['linkText'], 'String');
            }
            if (data.hasOwnProperty('linkVisibleEndDateUtc')) {
                obj['linkVisibleEndDateUtc'] = ApiClient.convertToType(data['linkVisibleEndDateUtc'], 'Date');
            }
            if (data.hasOwnProperty('linkVisibleStartDateUtc')) {
                obj['linkVisibleStartDateUtc'] = ApiClient.convertToType(data['linkVisibleStartDateUtc'], 'Date');
            }
            if (data.hasOwnProperty('pageTitle')) {
                obj['pageTitle'] = ApiClient.convertToType(data['pageTitle'], 'String');
            }
            if (data.hasOwnProperty('relativeUrl')) {
                obj['relativeUrl'] = ApiClient.convertToType(data['relativeUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique Campaign Identifier
 * @member {Number} campaignId
 */
HQPromotionMetadata.prototype['campaignId'] = undefined;

/**
 * Byte array containing the icon for the campaign in png
 * @member {String} iconData
 */
HQPromotionMetadata.prototype['iconData'] = undefined;

/**
 * SubText that should be displayed on the link/button leading to the campaign page.
 * @member {String} linkSubText
 */
HQPromotionMetadata.prototype['linkSubText'] = undefined;

/**
 * Text that should be displayed on the link/button leading to the campaign page.
 * @member {String} linkText
 */
HQPromotionMetadata.prototype['linkText'] = undefined;

/**
 * UTC date and time at which the link should stop showing up to get to the page (on the profile page, in the app, ...)
 * @member {Date} linkVisibleEndDateUtc
 */
HQPromotionMetadata.prototype['linkVisibleEndDateUtc'] = undefined;

/**
 * UTC date and time at which the link should start showing up to get to the page (on the profile page, in the app, ...)
 * @member {Date} linkVisibleStartDateUtc
 */
HQPromotionMetadata.prototype['linkVisibleStartDateUtc'] = undefined;

/**
 * Page title for the campaign.
 * @member {String} pageTitle
 */
HQPromotionMetadata.prototype['pageTitle'] = undefined;

/**
 * Link off geocaching root for the campaign (\"/play/leaderboard\", \"/play/hqpromo/campaignname\" for example)
 * @member {String} relativeUrl
 */
HQPromotionMetadata.prototype['relativeUrl'] = undefined;






export default HQPromotionMetadata;

