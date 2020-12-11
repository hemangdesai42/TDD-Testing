const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      const categories = [];

      const result = mergeCategories(template, categories, "li");

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.not.contain('<li>');
      expect(result).to.not.contain('</li>');

    });

    it("should return a single <li> for one category", () => {
      const categories = ["test"];

      const result = mergeCategories(template, categories, "li");

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>test</li>');
      expect(result).to.not.contain('< !--Content here-- >');

    });

    it("should return an <li> for each category", () => {
      const categories = ["1", "2" , "3"];

      const result = mergeCategories(template, categories, "li");

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>1</li>');
      expect(result).to.contain('<li>2</li>');
      expect(result).to.contain('<li>3</li>');
      expect(result).to.not.contain('< !--Content here-- >');

    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const categories = [];

      const result = mergeCategories(template, categories, 'option');

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.not.contain('<option>');
      expect(result).to.not.contain('</option>');
      expect(result).to.not.contain('< !--Content here-- >');

    });

    it("should return a single <option> for one category", () => {
      const categories = ['1'];

      const result = mergeCategories(template, categories, 'option');

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain("<option>1</option>");
      expect(result).to.not.contain('< !--Content here-- >');

    });

    it("should return an <option> for each category", () => {
      const categories = ['1', '2', '3'];

      const result = mergeCategories(template, categories, 'option');

      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain("<option>1</option>");
      expect(result).to.contain("<option>2</option>");
      expect(result).to.contain("<option>3</option>");
      expect(result).to.not.contain('< !--Content here-- >');

    });
  });
});
