'use strict';

var _docsUrl = require('../docsUrl');

var _docsUrl2 = _interopRequireDefault(_docsUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      url: (0, _docsUrl2.default)('first')
    },
    fixable: 'code'
  },

  create: function (context) {
    function isPossibleDirective(node) {
      return node.type === 'ExpressionStatement' && node.expression.type === 'Literal' && typeof node.expression.value === 'string';
    }

    return {
      'Program': function (n) {
        const body = n.body,
              absoluteFirst = context.options[0] === 'absolute-first',
              message = 'Import in body of module; reorder to top.',
              sourceCode = context.getSourceCode(),
              originSourceCode = sourceCode.getText();
        let nonImportCount = 0,
            anyExpressions = false,
            anyRelative = false,
            lastLegalImp = null,
            errorInfos = [],
            shouldSort = true,
            lastSortNodesIndex = 0;
        body.forEach(function (node, index) {
          if (!anyExpressions && isPossibleDirective(node)) {
            return;
          }

          anyExpressions = true;

          if (node.type === 'ImportDeclaration') {
            if (absoluteFirst) {
              if (/^\./.test(node.source.value)) {
                anyRelative = true;
              } else if (anyRelative) {
                context.report({
                  node: node.source,
                  message: 'Absolute imports should come before relative imports.'
                });
              }
            }
            if (nonImportCount > 0) {
              for (let variable of context.getDeclaredVariables(node)) {
                if (!shouldSort) break;
                const references = variable.references;
                if (references.length) {
                  for (let reference of references) {
                    if (reference.identifier.range[0] < node.range[1]) {
                      shouldSort = false;
                      break;
                    }
                  }
                }
              }
              shouldSort && (lastSortNodesIndex = errorInfos.length);
              errorInfos.push({
                node,
                range: [body[index - 1].range[1], node.range[1]]
              });
            } else {
              lastLegalImp = node;
            }
          } else {
            nonImportCount++;
          }
        });
        if (!errorInfos.length) return;
        errorInfos.forEach(function (errorInfo, index) {
          const node = errorInfo.node,
                infos = {
            node,
            message
          };
          if (index < lastSortNodesIndex) {
            infos.fix = function (fixer) {
              return fixer.insertTextAfter(node, '');
            };
          } else if (index === lastSortNodesIndex) {
            const sortNodes = errorInfos.slice(0, lastSortNodesIndex + 1);
            infos.fix = function (fixer) {
              const removeFixers = sortNodes.map(function (_errorInfo) {
                return fixer.removeRange(_errorInfo.range);
              }),
                    range = [0, removeFixers[removeFixers.length - 1].range[1]];
              let insertSourceCode = sortNodes.map(function (_errorInfo) {
                const nodeSourceCode = String.prototype.slice.apply(originSourceCode, _errorInfo.range);
                if (/\S/.test(nodeSourceCode[0])) {
                  return '\n' + nodeSourceCode;
                }
                return nodeSourceCode;
              }).join(''),
                  insertFixer = null,
                  replaceSourceCode = '';
              if (!lastLegalImp) {
                insertSourceCode = insertSourceCode.trim() + insertSourceCode.match(/^(\s+)/)[0];
              }
              insertFixer = lastLegalImp ? fixer.insertTextAfter(lastLegalImp, insertSourceCode) : fixer.insertTextBefore(body[0], insertSourceCode);
              const fixers = [insertFixer].concat(removeFixers);
              fixers.forEach(function (computedFixer, i) {
                replaceSourceCode += originSourceCode.slice(fixers[i - 1] ? fixers[i - 1].range[1] : 0, computedFixer.range[0]) + computedFixer.text;
              });
              return fixer.replaceTextRange(range, replaceSourceCode);
            };
          }
          context.report(infos);
        });
      }
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9maXJzdC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwidXJsIiwiZml4YWJsZSIsImNyZWF0ZSIsImNvbnRleHQiLCJpc1Bvc3NpYmxlRGlyZWN0aXZlIiwibm9kZSIsImV4cHJlc3Npb24iLCJ2YWx1ZSIsIm4iLCJib2R5IiwiYWJzb2x1dGVGaXJzdCIsIm9wdGlvbnMiLCJtZXNzYWdlIiwic291cmNlQ29kZSIsImdldFNvdXJjZUNvZGUiLCJvcmlnaW5Tb3VyY2VDb2RlIiwiZ2V0VGV4dCIsIm5vbkltcG9ydENvdW50IiwiYW55RXhwcmVzc2lvbnMiLCJhbnlSZWxhdGl2ZSIsImxhc3RMZWdhbEltcCIsImVycm9ySW5mb3MiLCJzaG91bGRTb3J0IiwibGFzdFNvcnROb2Rlc0luZGV4IiwiZm9yRWFjaCIsImluZGV4IiwidGVzdCIsInNvdXJjZSIsInJlcG9ydCIsInZhcmlhYmxlIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJyZWZlcmVuY2VzIiwibGVuZ3RoIiwicmVmZXJlbmNlIiwiaWRlbnRpZmllciIsInJhbmdlIiwicHVzaCIsImVycm9ySW5mbyIsImluZm9zIiwiZml4IiwiZml4ZXIiLCJpbnNlcnRUZXh0QWZ0ZXIiLCJzb3J0Tm9kZXMiLCJzbGljZSIsInJlbW92ZUZpeGVycyIsIm1hcCIsIl9lcnJvckluZm8iLCJyZW1vdmVSYW5nZSIsImluc2VydFNvdXJjZUNvZGUiLCJub2RlU291cmNlQ29kZSIsIlN0cmluZyIsInByb3RvdHlwZSIsImFwcGx5Iiwiam9pbiIsImluc2VydEZpeGVyIiwicmVwbGFjZVNvdXJjZUNvZGUiLCJ0cmltIiwibWF0Y2giLCJpbnNlcnRUZXh0QmVmb3JlIiwiZml4ZXJzIiwiY29uY2F0IiwiY29tcHV0ZWRGaXhlciIsImkiLCJ0ZXh0IiwicmVwbGFjZVRleHRSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLE9BQU9D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QkFVSUMsb0JBQW9CLEVBVnhCO0FBV0Esa0JBQUksQ0FBQ25DLFlBQUwsRUFBbUI7QUFDZjRCLG1DQUNFQSxpQkFBaUJRLElBQWpCLEtBQTBCUixpQkFBaUJTLEtBQWpCLENBQXVCLFFBQXZCLEVBQWlDLENBQWpDLENBRDVCO0FBRUg7QUFDREgsNEJBQWNsQyxlQUNBb0IsTUFBTUMsZUFBTixDQUFzQnJCLFlBQXRCLEVBQW9DNEIsZ0JBQXBDLENBREEsR0FFQVIsTUFBTWtCLGdCQUFOLENBQXVCakQsS0FBSyxDQUFMLENBQXZCLEVBQWdDdUMsZ0JBQWhDLENBRmQ7QUFHQSxvQkFBTVcsU0FBUyxDQUFDTCxXQUFELEVBQWNNLE1BQWQsQ0FBcUJoQixZQUFyQixDQUFmO0FBQ0FlLHFCQUFPbkMsT0FBUCxDQUFlLFVBQVVxQyxhQUFWLEVBQXlCQyxDQUF6QixFQUE0QjtBQUN6Q1AscUNBQXNCeEMsaUJBQWlCNEIsS0FBakIsQ0FDcEJnQixPQUFPRyxJQUFJLENBQVgsSUFBZ0JILE9BQU9HLElBQUksQ0FBWCxFQUFjM0IsS0FBZCxDQUFvQixDQUFwQixDQUFoQixHQUF5QyxDQURyQixFQUN3QjBCLGNBQWMxQixLQUFkLENBQW9CLENBQXBCLENBRHhCLElBRWxCMEIsY0FBY0UsSUFGbEI7QUFHRCxlQUpEO0FBS0EscUJBQU92QixNQUFNd0IsZ0JBQU4sQ0FBdUI3QixLQUF2QixFQUE4Qm9CLGlCQUE5QixDQUFQO0FBQ0QsYUE5QkQ7QUErQkQ7QUFDRHBELGtCQUFReUIsTUFBUixDQUFlVSxLQUFmO0FBQ0QsU0E3Q0Q7QUE4Q0Q7QUF4R0ksS0FBUDtBQTBHRDtBQTFIYyxDQUFqQiIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIHVybDogZG9jc1VybCgnZmlyc3QnKSxcbiAgICB9LFxuICAgIGZpeGFibGU6ICdjb2RlJyxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgZnVuY3Rpb24gaXNQb3NzaWJsZURpcmVjdGl2ZSAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnICYmXG4gICAgICAgIG5vZGUuZXhwcmVzc2lvbi50eXBlID09PSAnTGl0ZXJhbCcgJiZcbiAgICAgICAgdHlwZW9mIG5vZGUuZXhwcmVzc2lvbi52YWx1ZSA9PT0gJ3N0cmluZydcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ1Byb2dyYW0nOiBmdW5jdGlvbiAobikge1xuICAgICAgICBjb25zdCBib2R5ID0gbi5ib2R5XG4gICAgICAgICAgICAsIGFic29sdXRlRmlyc3QgPSBjb250ZXh0Lm9wdGlvbnNbMF0gPT09ICdhYnNvbHV0ZS1maXJzdCdcbiAgICAgICAgICAgICwgbWVzc2FnZSA9ICdJbXBvcnQgaW4gYm9keSBvZiBtb2R1bGU7IHJlb3JkZXIgdG8gdG9wLidcbiAgICAgICAgICAgICwgc291cmNlQ29kZSA9IGNvbnRleHQuZ2V0U291cmNlQ29kZSgpXG4gICAgICAgICAgICAsIG9yaWdpblNvdXJjZUNvZGUgPSBzb3VyY2VDb2RlLmdldFRleHQoKVxuICAgICAgICBsZXQgbm9uSW1wb3J0Q291bnQgPSAwXG4gICAgICAgICAgLCBhbnlFeHByZXNzaW9ucyA9IGZhbHNlXG4gICAgICAgICAgLCBhbnlSZWxhdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgLCBsYXN0TGVnYWxJbXAgPSBudWxsXG4gICAgICAgICAgLCBlcnJvckluZm9zID0gW11cbiAgICAgICAgICAsIHNob3VsZFNvcnQgPSB0cnVlXG4gICAgICAgICAgLCBsYXN0U29ydE5vZGVzSW5kZXggPSAwXG4gICAgICAgIGJvZHkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaW5kZXgpe1xuICAgICAgICAgIGlmICghYW55RXhwcmVzc2lvbnMgJiYgaXNQb3NzaWJsZURpcmVjdGl2ZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYW55RXhwcmVzc2lvbnMgPSB0cnVlXG5cbiAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnSW1wb3J0RGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICBpZiAoYWJzb2x1dGVGaXJzdCkge1xuICAgICAgICAgICAgICBpZiAoL15cXC4vLnRlc3Qobm9kZS5zb3VyY2UudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgYW55UmVsYXRpdmUgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYW55UmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICBub2RlOiBub2RlLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBYnNvbHV0ZSBpbXBvcnRzIHNob3VsZCBjb21lIGJlZm9yZSByZWxhdGl2ZSBpbXBvcnRzLicsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vbkltcG9ydENvdW50ID4gMCkge1xuICAgICAgICAgICAgICBmb3IgKGxldCB2YXJpYWJsZSBvZiBjb250ZXh0LmdldERlY2xhcmVkVmFyaWFibGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGRTb3J0KSBicmVha1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB2YXJpYWJsZS5yZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCByZWZlcmVuY2Ugb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmZXJlbmNlLmlkZW50aWZpZXIucmFuZ2VbMF0gPCBub2RlLnJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkU29ydCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG91bGRTb3J0ICYmIChsYXN0U29ydE5vZGVzSW5kZXggPSBlcnJvckluZm9zLmxlbmd0aClcbiAgICAgICAgICAgICAgZXJyb3JJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIHJhbmdlOiBbYm9keVtpbmRleCAtIDFdLnJhbmdlWzFdLCBub2RlLnJhbmdlWzFdXSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhc3RMZWdhbEltcCA9IG5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uSW1wb3J0Q291bnQrK1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFlcnJvckluZm9zLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgIGVycm9ySW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3JJbmZvLCBpbmRleCkge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBlcnJvckluZm8ubm9kZVxuICAgICAgICAgICAgICAsIGluZm9zID0ge1xuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA8IGxhc3RTb3J0Tm9kZXNJbmRleCkge1xuICAgICAgICAgICAgaW5mb3MuZml4ID0gZnVuY3Rpb24gKGZpeGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaXhlci5pbnNlcnRUZXh0QWZ0ZXIobm9kZSwgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGFzdFNvcnROb2Rlc0luZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0Tm9kZXMgPSBlcnJvckluZm9zLnNsaWNlKDAsIGxhc3RTb3J0Tm9kZXNJbmRleCArIDEpXG4gICAgICAgICAgICBpbmZvcy5maXggPSBmdW5jdGlvbiAoZml4ZXIpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlRml4ZXJzID0gc29ydE5vZGVzLm1hcChmdW5jdGlvbiAoX2Vycm9ySW5mbykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4ZXIucmVtb3ZlUmFuZ2UoX2Vycm9ySW5mby5yYW5nZSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAsIHJhbmdlID0gWzAsIHJlbW92ZUZpeGVyc1tyZW1vdmVGaXhlcnMubGVuZ3RoIC0gMV0ucmFuZ2VbMV1dXG4gICAgICAgICAgICAgIGxldCBpbnNlcnRTb3VyY2VDb2RlID0gc29ydE5vZGVzLm1hcChmdW5jdGlvbiAoX2Vycm9ySW5mbykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlU291cmNlQ29kZSA9IFN0cmluZy5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luU291cmNlQ29kZSwgX2Vycm9ySW5mby5yYW5nZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGlmICgvXFxTLy50ZXN0KG5vZGVTb3VyY2VDb2RlWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnXFxuJyArIG5vZGVTb3VyY2VDb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVTb3VyY2VDb2RlXG4gICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKVxuICAgICAgICAgICAgICAgICwgaW5zZXJ0Rml4ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgLCByZXBsYWNlU291cmNlQ29kZSA9ICcnXG4gICAgICAgICAgICAgIGlmICghbGFzdExlZ2FsSW1wKSB7XG4gICAgICAgICAgICAgICAgICBpbnNlcnRTb3VyY2VDb2RlID1cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U291cmNlQ29kZS50cmltKCkgKyBpbnNlcnRTb3VyY2VDb2RlLm1hdGNoKC9eKFxccyspLylbMF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnNlcnRGaXhlciA9IGxhc3RMZWdhbEltcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZXIuaW5zZXJ0VGV4dEFmdGVyKGxhc3RMZWdhbEltcCwgaW5zZXJ0U291cmNlQ29kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVyLmluc2VydFRleHRCZWZvcmUoYm9keVswXSwgaW5zZXJ0U291cmNlQ29kZSlcbiAgICAgICAgICAgICAgY29uc3QgZml4ZXJzID0gW2luc2VydEZpeGVyXS5jb25jYXQocmVtb3ZlRml4ZXJzKVxuICAgICAgICAgICAgICBmaXhlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29tcHV0ZWRGaXhlciwgaSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VTb3VyY2VDb2RlICs9IChvcmlnaW5Tb3VyY2VDb2RlLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgZml4ZXJzW2kgLSAxXSA/IGZpeGVyc1tpIC0gMV0ucmFuZ2VbMV0gOiAwLCBjb21wdXRlZEZpeGVyLnJhbmdlWzBdXG4gICAgICAgICAgICAgICAgKSArIGNvbXB1dGVkRml4ZXIudGV4dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGZpeGVyLnJlcGxhY2VUZXh0UmFuZ2UocmFuZ2UsIHJlcGxhY2VTb3VyY2VDb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChpbmZvcylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19