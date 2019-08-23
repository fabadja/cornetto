/*
 Cornetto

 Copyright (C) 2018–2019 ANSSI
 Contributors:
 2018–2019 Paul Fayoux paul.fayoux@ssi.gouv.fr
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 */
/**
 * [pushError description]
 * @param  {String} message       [description]
 * @param  {String} [severity='error'] [description]
 * @return {[type]}                    [description]
 */
export const pushError = (message, severity = 'error') => ({
  type: 'ERROR_PUSH',
  message,
  severity
})

/**
 * [dismissError description]
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
export const dismissError = position => ({
  type: 'ERROR_DISMISS',
  position
})

/**
 * [clearErrors description]
 * @return {[type]} [description]
 */
export const clearErrors = () => ({
  type: 'ERROR_CLEAR_ALL'
})
